<template>
	<app-content :class="{'icon-loading': loading}" app-name="vueexample">
		<template slot="navigation">
			<app-navigation-new v-if="!loading" :text="t('vueexample', 'New XXXXXX')" :disabled="false"
				button-id="new-vueexample-button" button-class="icon-add" @click="newButtonAction" />
			<ul id="app-vueexample-navigation">
				<app-navigation-item v-for="item in menu" :key="item.key" :item="item" />
			</ul>
			<app-navigation-settings>
				Example settings
			</app-navigation-settings>
		</template>
		<template slot="content" class="app-vueexample-content">
			<span>This is the content</span> <br>
			<datetime-picker v-model="date" /> <br>
			<multiselect v-model="date" :placeholder="t('vueexample', 'Pick an item')" :options="menu"
				label="text" track-by="id" />
		</template>
	</app-content>
</template>

<script>
import {
	AppContent,
	AppNavigationItem,
	AppNavigationNew,
	AppNavigationSettings,
	DatetimePicker,
	Multiselect
	// PopoverMenu
} from 'nextcloud-vue'

export default {
	name: 'App',
	components: {
		AppContent,
		AppNavigationItem,
		AppNavigationNew,
		AppNavigationSettings,
		DatetimePicker,
		Multiselect
		// PopoverMenu
	},
	data: function() {
		return {
			loading: false,
			date: new Date()
		}
	},
	computed: {
		// App navigation
		menu: function() {
			return [
				{
					id: 'app-category-your-apps',
					classes: [],
					href: '#',
					icon: 'icon-category-installed',
					text: t('settings', 'Your apps')
				},
				{
					caption: true,
					text: t('vueexample', 'Section')
				},
				{
					id: 'app-category-enabled',
					classes: [],
					icon: 'icon-category-enabled',
					href: '#',
					utils: {
						actions: [{
							icon: 'icon-delete',
							text: t('settings', 'Remove group'),
							action: function() {
								alert('remove')
							}
						}]
					},
					text: t('settings', 'Active apps')
				},
				{
					id: 'app-category-enabled',
					classes: [],
					icon: 'icon-category-enabled',
					href: '#',
					utils: {
						counter: 123,
						actions: [
							{
								icon: 'icon-delete',
								text: t('settings', 'Remove group'),
								action: function() {
									alert('remove')
								}
							},
							{
								icon: 'icon-delete',
								text: t('settings', 'Remove group'),
								action: function() {
									alert('remove')
								}
							}
						]
					},
					text: t('settings', 'Active apps')
				},
				{
					id: 'app-category-disabled',
					classes: [],
					icon: 'icon-category-disabled',
					href: '#',
					undo: true,
					text: t('settings', 'Disabled apps')
				}
			]
		}
	},
	methods: {
		addOption(val) {
			this.options.push(val)
			this.select.push(val)
		},
		previous(data) {
			console.debug(data)
		},
		next(data) {
			console.debug(data)
		},
		close(data) {
			console.debug(data)
		},
		newButtonAction(e) {
			console.debug(e)
		}
	}
}
</script>
