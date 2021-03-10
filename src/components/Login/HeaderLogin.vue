<template>
	<v-toolbar class="navbar fixed elevation-0" color="transparent" height="90" dense>
            <div>
                <router-link :to="{ name: 'home' }">
                    <v-img class="mx-10 my-2" src="@/assets/logo.png" width="110" height="81">
                    </v-img>
                </router-link>
            </div>
    </v-toolbar>
</template>