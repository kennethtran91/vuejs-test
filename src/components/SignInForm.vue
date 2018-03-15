<template>
<v-container>
  <div>
    
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
      <td class="text-xs-left">{{ props.item.rapname }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>

        <td class="justify-center">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  
<v-dialog v-model="dialog" max-width="500px">
      <v-btn color="primary" slot="activator" class="mb-2">New</v-btn>

      <v-card>
        <v-card-title>
          Adding new participants</span>
        </v-card-title>
        <v-card-text>

          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md1>
                <v-text-field label="ID" v-model="editedItem.id"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md5>
                <v-text-field label="Name" v-model="editedItem.rapname"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md6>
                <v-text-field label="Email" v-model="editedItem.email"></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

  </div>
</v-container>

</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'ID',
          align: 'left',
          value: 'id'
        },
          {text: 'Name', value: 'rapname'},
          {text: 'Email', value: 'email' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        name: ''
      },
      defaultItem: {
        name: ''
      }
    }),

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.items = [
          {
            rapname: 'Lmao ZeDong',
            id: 1,
            email: 'dmcs@vrap101.com'
          },
          {
            rapname: 'Brian Griffin',
            id: 2,
            email: 'dmcs@vrap101.com'
          },

          {
            rapname: 'Meme Team',
            id: 3,
            email: 'dmcs@vrap101.com'
          },

          {
            rapname: 'Butt Hole',
            id: 4,
            email: 'dmcs@vrap101.com'
          },

          {
            rapname: 'Peter Griffin',
            id: 5,
            email: 'dmcs@vrap101.com'
          },

          {
            rapname: 'Stewie Griffin',
            id: 6,
            email: 'dmcs@vrap101.com'
          },

          {
            rapname: 'Ball Sacks',
            id: 7,
            email: 'dmcs@vrap101.com'
          },

          {
            rapname: 'Tee Bag',
            id: 8,
            email: 'dmcs@vrap101.com'
          },

           {
            rapname: 'Uranus Amazing',
            id: 9,
            email: 'dmcs@vrap101.com'
          },

          {
            value: false,
            rapname: 'U Gey',
            id: 10,
            email: 'dmcs@vrap101.com'
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.items.indexOf(item)
        this.items.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>