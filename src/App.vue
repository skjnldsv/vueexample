<template>
	<Content :class="{'icon-loading': loading}" app-name="vueexample">
		<AppNavigation>
			<AppNavigationNew v-if="!loading"
				:text="t('vueexample', 'New XXXXXX')"
				:disabled="false"
				button-id="new-vueexample-button"
				button-class="icon-add"
				@click="newButtonAction" />
			<template id="app-vueexample-navigation" #list>
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
			</template>
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
			title="eberhard-grossgasteiger-VDw-nsi5TpE-unsplash.jpg"
			subtitle="4,3 MB, last edited 41 days ago"
			:starred.sync="starred"
			@close="show=false">
			<template #primary-actions>
				<button class="primary">
					Button 1
				</button>
				<input id="link-checkbox"
					name="link-checkbox"
					class="checkbox link-checkbox"
					type="checkbox">
				<label for="link-checkbox" class="link-checkbox-label">Do something</label>
			</template>
			<template #secondary-actions>
				<ActionButton icon="icon-edit" @click="alert('Edit')">
					Edit
				</ActionButton>
				<ActionButton icon="icon-delete" @click="alert('Delete')">
					Delete
				</ActionButton>
				<ActionLink icon="icon-external" title="Link" href="https://nextcloud.com" />
			</template>
			<AppSidebarTab id="vueexample" name="Vueexample" icon="icon-vueexample">
				this is the vueexample tab
			</AppSidebarTab>
			<AppSidebarTab id="activity" name="Activity" icon="icon-activity">
				this is the activity tab
			</AppSidebarTab>
			<AppSidebarTab id="comments" name="Comments" icon="icon-comment">
				this is the comments tab
			</AppSidebarTab>
			<AppSidebarTab id="sharing" name="Sharing" icon="icon-shared">
				this is the sharing tab
			</AppSidebarTab>
			<AppSidebarTab id="versions" name="Versions" icon="icon-history">
				this is the versions tab
			</AppSidebarTab>
		</AppSidebar>
	</Content>
</template>

<script>
import Content from '@nextcloud/vue/dist/Components/Content'
import AppContent from '@nextcloud/vue/dist/Components/AppContent'
import AppNavigation from '@nextcloud/vue/dist/Components/AppNavigation'
import AppNavigationItem from '@nextcloud/vue/dist/Components/AppNavigationItem'
import AppNavigationNew from '@nextcloud/vue/dist/Components/AppNavigationNew'
import AppNavigationSettings from '@nextcloud/vue/dist/Components/AppNavigationSettings'
import AppSidebar from '@nextcloud/vue/dist/Components/AppSidebar'
import AppSidebarTab from '@nextcloud/vue/dist/Components/AppSidebarTab'
import AppNavigationCounter from '@nextcloud/vue/dist/Components/AppNavigationCounter'
import ActionButton from '@nextcloud/vue/dist/Components/ActionButton'
import ActionLink from '@nextcloud/vue/dist/Components/ActionLink'
import AppNavigationIconBullet from '@nextcloud/vue/dist/Components/AppNavigationIconBullet'
import ActionCheckbox from '@nextcloud/vue/dist/Components/ActionCheckbox'
import ActionInput from '@nextcloud/vue/dist/Components/ActionInput'
import ActionRouter from '@nextcloud/vue/dist/Components/ActionRouter'
import ActionText from '@nextcloud/vue/dist/Components/ActionText'
import ActionTextEditable from '@nextcloud/vue/dist/Components/ActionTextEditable'

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
	data() {
		return {
			loading: false,
			date: Date.now() + 86400000 * 3,
			date2: Date.now() + 86400000 * 3 + Math.floor(Math.random() * 86400000 / 2),
			show: true,
			starred: false,
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
		},
		log(e) {
			console.debug(e)
		},
	},
}
</script>
