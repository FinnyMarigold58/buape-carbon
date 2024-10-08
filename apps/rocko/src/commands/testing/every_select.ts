import {
	ChannelSelectMenu,
	type ChannelSelectMenuInteraction,
	Command,
	type CommandInteraction,
	MentionableSelectMenu,
	type MentionableSelectMenuInteraction,
	RoleSelectMenu,
	type RoleSelectMenuInteraction,
	Row,
	StringSelectMenu,
	type StringSelectMenuInteraction,
	UserSelectMenu,
	type UserSelectMenuInteraction
} from "@buape/carbon"

export default class SelectCommand extends Command {
	name = "every_select"
	description = "Send every select menu"
	defer = true

	components = [
		StringSelect,
		RoleSelect,
		MentionableSelect,
		ChannelSelect,
		UserSelect
	]

	async run(interaction: CommandInteraction) {
		const row = new Row()
		row.addComponent(new StringSelect())
		row.addComponent(new RoleSelect())
		row.addComponent(new MentionableSelect())
		row.addComponent(new ChannelSelect())
		row.addComponent(new UserSelect())

		interaction.reply({
			content: "Select menus!!",
			components: [row]
		})
	}
}

class StringSelect extends StringSelectMenu {
	customId = "string-select"
	placeholder = "String select menu"
	options = [{ label: "Option 1", value: "option1" }]
	async run(interaction: StringSelectMenuInteraction) {
		interaction.reply({ content: interaction.values.join(", ") })
	}
}

class RoleSelect extends RoleSelectMenu {
	customId = "role-select"
	placeholder = "Role select menu"
	async run(interaction: RoleSelectMenuInteraction) {
		interaction.reply({ content: interaction.values.join(", ") })
	}
}
class MentionableSelect extends MentionableSelectMenu {
	customId = "mentionable-select"
	placeholder = "Mentionable select menu"
	async run(interaction: MentionableSelectMenuInteraction) {
		interaction.reply({ content: interaction.values.join(", ") })
	}
}
class ChannelSelect extends ChannelSelectMenu {
	customId = "channel-select"
	placeholder = "Channel select menu"
	async run(interaction: ChannelSelectMenuInteraction) {
		interaction.reply({ content: interaction.values.join(", ") })
	}
}
class UserSelect extends UserSelectMenu {
	customId = "user-select"
	placeholder = "User select menu"
	async run(interaction: UserSelectMenuInteraction) {
		interaction.reply({ content: interaction.values.join(", ") })
	}
}
