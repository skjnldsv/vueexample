<template>
	<Content :class="{'icon-loading': loading}" app-name="vueexample">
		<AppNavigation>
			<AppNavigationNew v-if="!loading"
				:text="t('vueexample', 'New XXXXXX')"
				:disabled="false"
				button-id="new-vueexample-button"
				button-class="icon-add"
				@click="newButtonAction" />
			<ul id="app-vueexample-navigation">
				<AppNavigationItem icon="icon-user" title="This is a user">
					<AppNavigationCounter slot="counter" :highlighted="true">
						99+
					</AppNavigationCounter>
					<template slot="actions">
						<ActionButton icon="icon-edit" @click="alert('Edit')">
							Edit
						</ActionButton>
						<ActionButton icon="icon-delete" @click="alert('Delete')">
							Delete
						</ActionButton>
						<ActionLink icon="icon-external" title="Link" href="https://nextcloud.com" />
					</template>
				</AppNavigationItem>
				<AppNavigationItem title="This is bullet item">
					<AppNavigationIconBullet slot="icon" color="0082c9" />
					<template slot="actions">
						<ActionButton :disabled="false" icon="icon-edit" @click="alert('Edit')">
							Edit
						</ActionButton>
						<ActionLink :disabled="false"
							icon="icon-external"
							title="Link"
							href="https://nextcloud.com" />
						<ActionCheckbox :disabled="false">
							Checkbox
						</ActionCheckbox>
						<ActionInput :disabled="false" icon="icon-add">
							ActionInput
						</ActionInput>
						<ActionRouter :disabled="false" icon="icon-add" to="#">
							ActionRouter
						</ActionRouter>
						<ActionText :disabled="false" icon="icon-add">
							ActionText
						</ActionText>
						<ActionTextEditable :disabled="false">
							ActionTextEditable
						</ActionTextEditable>
					</template>
				</AppNavigationItem>
				<AppNavigationItem title="Counter and actions"
					icon="icon-category-enabled">
					<AppNavigationCounter slot="counter" :highlighted="true">
						99+
					</AppNavigationCounter>
					<template slot="actions">
						<ActionButton icon="icon-edit" @click="alert('Edit')">
							Edit
						</ActionButton>
						<ActionButton icon="icon-delete" @click="alert('Delete')">
							Delete
						</ActionButton>
						<ActionLink icon="icon-external" title="Link" href="https://nextcloud.com" />
					</template>
				</AppNavigationItem>
				<AppNavigationItem title="Item with children"
					:allow-collapse="true"
					icon="icon-folder">
					<template>
						<AppNavigationItem title="AppNavigationItemChild1">
							<AppNavigationIconBullet slot="icon" color="0082c9" />
						</AppNavigationItem>
						<AppNavigationItem title="AppNavigationItemChild2" icon="icon-category-enabled" />
						<AppNavigationItem title="AppNavigationItemChild3" icon="icon-category-enabled" />
						<AppNavigationItem title="AppNavigationItemChild4" icon="icon-category-enabled" />
					</template>
				</AppNavigationItem>
				<AppNavigationItem title="Loading Item" :loading="true" />
				<AppNavigationItem title="Event Item" icon="icon-folder" @click="console.log('clicked')" />
				<AppNavigationItem title="Editable Item"
					icon="icon-folder"
					:editable="true"
					edit-placeholder="I am a placeholder" />
				<AppNavigationItem title="Are you sure you want to delete?" :undo="true" />
				<AppNavigationItem title="First pinned item"
					icon="icon-category-enabled"
					:pinned="true" />
				<AppNavigationItem title="Second pinned item"
					icon="icon-category-enabled"
					:pinned="true" />
				<AppNavigationItem title="Third pinned item"
					icon="icon-category-enabled"
					:pinned="true" />
			</ul>
			<AppNavigationSettings>
				Example settings
			</AppNavigationSettings>
		</AppNavigation>
		<AppContent>
			<span>This is the content</span>
			<button @click="show = !show">
				Toggle sidebar
			</button>
		</AppContent>
		<AppSidebar v-show="show"
			title="christmas-image-2018-12-25-00:01:12.jpg"
			subtitle="4,3 MB, last edited 41 days ago"
			:actions="menu"
			:starred.sync="starred"
			@close="show=false">
			<template #action>
				<button class="primary">
					Button 1
				</button>
				<input id="link-checkbox"
					name="link-checkbox"
					class="checkbox link-checkbox"
					type="checkbox">
				<label for="link-checkbox" class="link-checkbox-label">Do something</label>
			</template>
			<AppSidebarTab name="Chat" icon="icon-talk">
				this is the chat tab
			</AppSidebarTab>
			<AppSidebarTab name="Activity" icon="icon-activity">
				this is the activity tab
			</AppSidebarTab>
			<AppSidebarTab name="Comments" icon="icon-comment">
				this is the comments tab
			</AppSidebarTab>
			<AppSidebarTab name="Sharing" icon="icon-shared">
				this is the sharing tab
			</AppSidebarTab>
			<AppSidebarTab name="Versions" icon="icon-history">
				this is the versions tab
			</AppSidebarTab>
		</AppSidebar>
	</Content>
</template>

<script>
import {
	Content,
	AppContent,
	AppNavigation,
	AppNavigationItem,
	AppNavigationNew,
	AppNavigationSettings,
	AppSidebar,
	AppSidebarTab,
	AppNavigationCounter,
	ActionButton,
	ActionLink,
	AppNavigationIconBullet,
	ActionCheckbox,
	ActionInput,
	ActionRouter,
	ActionText,
	ActionTextEditable,
} from '@nextcloud/vue'

export default {
	name: 'App',
	components: {
		Content,
		AppContent,
		AppNavigation,
		AppNavigationItem,
		AppNavigationNew,
		AppNavigationSettings,
		AppSidebar,
		AppSidebarTab,
		AppNavigationCounter,
		ActionButton,
		ActionLink,
		AppNavigationIconBullet,
		ActionCheckbox,
		ActionInput,
		ActionRouter,
		ActionText,
		ActionTextEditable,
	},
	data: function() {
		return {
			loading: false,
			date: Date.now() + 86400000 * 3,
			date2: Date.now() + 86400000 * 3 + Math.floor(Math.random() * 86400000 / 2),
			show: true,
			starred: false,
		}
	},
	computed: {
		// App navigation
		menu: function() {
			return [
				{
					id: 'app-category-your-apps',
					classes: [],
					href: '#1',
					// action: this.log,
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
					href: '#2',
					utils: {
						actions: [{
							icon: 'icon-delete',
							text: t('settings', 'Remove group'),
							action: function() {
								alert('remove')
							},
						}],
					},
					text: t('settings', 'Active apps'),
				},
				{
					id: 'app-category-enabled',
					classes: [],
					href: '#3',
				},
				{
					id: 'app-category-disabled',
					classes: [],
					icon: 'icon-category-disabled',
					href: '#4',
					undo: true,
					text: t('settings', 'Disabled apps'),
				},
			]
		},
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
		},
		log(e) {
			console.debug(e)
		},
	},
}
</script>
