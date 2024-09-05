import {
	InteractionResponseType,
	Routes,
	type APIMessageComponentInteraction,
	type ComponentType
} from "discord-api-types/v10"
import type { Client } from "../classes/Client.js"
import { splitCustomId } from "../utils.js"
import { BaseInteraction } from "./BaseInteraction.js"

export class BaseComponentInteraction extends BaseInteraction<APIMessageComponentInteraction> {
	customId: string
	componentType: ComponentType
	constructor(client: Client, data: APIMessageComponentInteraction) {
		super(client, data)
		if (!data.data)
			throw new Error("Invalid interaction data was used to create this class")
		this.customId = splitCustomId(data.data.custom_id)[0]
		this.componentType = data.data.component_type
	}

	/**
	 * Acknowledge the interaction, the user does not see a loading state.
	 * This can only be used for component interactions
	 */
	async acknowledge() {
		await this.client.rest.post(
			Routes.interactionCallback(this.rawData.id, this.rawData.token),
			{
				body: {
					type: InteractionResponseType.DeferredMessageUpdate
				}
			}
		)
	}
}
