<template>
	<div id="content" class="app-vueexample">
		<div id="app-navigation">
			<app-navigation :menu="menu">
				<template slot="settings-content">Example settings</template>
			</app-navigation>
		</div>
		<div id="app-content">
			<DatetimePicker v-model="date" :lang="lang" :first-day-of-week="firstDay" />
		</div>
	</div>
</template>

<script>
import {
	DatetimePicker,
	PopoverMenu,
	AppNavigation,
	Multiselect
} from 'nextcloud-vue'

export default {
	name: 'App',
	components: {
		DatetimePicker, PopoverMenu, AppNavigation, Multiselect
	},
	data: function() {
		return {
			date: new Date(),
			// options: [1,2,3,4,5,6,7,8,9,0],
			options: [{
				desc: 'Admin user',
				displayName: 'john.doe-marry@mail.com',
				icon: 'icon-user',
				user: 'admin'
			}, {
				displayName: 'marry-jane.dolly@mariacorp.com',
				icon: 'icon-user',
				user: 'test0'
			}, {
				desc: '',
				displayName: 'engineering-list@dev-us.io',
				icon: 'icon-user',
				user: 'test10'
			}],
			select: [],
			isOpen: false,
			// example popover in the content
			menuPopover: [
				{
					icon: 'icon-delete',
					text: 'Delete item',
					action: () => {
						alert('Deleted!')
					}
				},
				{
					icon: 'icon-user',
					text: 'Nextcloud website',
					action: () => {},
					href: 'https://nextcloud.com'
				},
				{
					icon: 'icon-details',
					longtext: 'Add item',
					action: () => {
						alert('details')
					}
				}
			]
		}
	},
	computed: {
		firstDay() {
			return window.firstDay
				? window.firstDay
				: 0 // sunday as default
		},
		lang() {
			// fallback to default in case of unavailable data
			return {
				days: window.dayNamesShort
					? window.dayNamesShort			// provided by nextcloud
					: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
				months: window.monthNamesShort
					? window.monthNamesShort		// provided by nextcloud
					: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
				placeholder: {
					date: 'Select Date' // TODO: Translate
				}
			}
		},
		// App navigation
		menu: function() {
			let defaultCategories = [
				{
					id: 'app-category-your-apps',
					classes: [],
					href: '#',
					icon: 'icon-category-installed',
					text: t('settings', 'Your apps'),
				},
				{
					caption: true,
					text: t('vueexample', 'Section'),
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
					text: t('settings', 'Active apps'),
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
					text: t('settings', 'Active apps'),
				},
				{
					id: 'app-category-disabled',
					classes: [],
					icon: 'icon-category-disabled',
					href: '#',
					undo: true,
					text: t('settings', 'Disabled apps'),
				}
			]
			return {
				items: defaultCategories,
				loading: false
			}
		}
	},
	methods: {
		addOption(val) {
			this.options.push(val)
			this.select.push(val)
		}
	},
}
</script>
