<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-toolbar color="white" light>


          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <v-icon v-text="item.avatar"></v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <router-link to="/locationview">
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title></router-link>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { header: 'Your Documents' },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          },
          { divider: true, inset: true },
          {
            avatar: 'file_copy',
            title: 'Demo',
            subtitle: "Document"
          }
        ]
      }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #1d3443;
    text-decoration: none;
  }
</style>
