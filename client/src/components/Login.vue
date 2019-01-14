<template>
  <v-container>
    <v-layout align-center justify-center row  wrap>
      <v-flex xs12 sm6 offset-sm-4 >
        <v-layout row wrap>
          <v-flex xs12 text-xs-center text-sm-center>
            <div class="error--text" v-html="error" v-if="error" />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="primary lighten-5" elevation="5">
              <v-layout row wrap>
                <v-flex xs12  text-xs-center>
                    <v-card-title class="info" primary-title>
                      <h3 class="white--text" >Authentification de l'utilisateur</h3>
                    </v-card-title>
                    <v-divider light></v-divider>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-layout row wrap>
                        <v-flex xs12>
                          <v-card-text>
                            <v-layout row wrap>
                              <v-flex xs12>
                                <v-text-field
                                  v-model="email"
                                  :rules="emailRules"
                                  label="E-mail"
                                  required
                                ></v-text-field>
                                <v-text-field
                                  v-model="password"
                                  :counter="8"
                                  :rules="passwordRules"
                                  label="Password"
                                  required
                                ></v-text-field>
                              </v-flex>
                            </v-layout>
                          </v-card-text>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap>
                        <v-flex xs12>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              :disabled="!valid"
                              color="accent"
                              @click="login"
                            >
                              Connexion
                            </v-btn>
                          </v-card-actions>
                        </v-flex>
                      </v-layout>
                    </v-form>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
    export default {
        name: "login",
      data() {
        return {
          valid: true,
          email: '',
          password: '',
          error: null,
          passwordRules: [
            v => !!v || 'Le Password est obligatoire',
            v => (v && v.length >= 8) || 'Le Password doit avoir au moins 8 caracteres'
          ],
          emailRules: [
            v => !!v || "l'E-mail est obligatoire",
            v => /.+@.+/.test(v) || 'Entrez un E-mail valide'
          ],
        }
      },
      computed: {
          formIsValid () {
            return this.$refs.form.validate()
          }
      },
      methods: {
        reset () {
          this.$refs.form.reset()
        },

        async login () {
          if (this.formIsValid) {
            await AuthenticationService.login({
              email: this.email,
              password: this.password
            })
              .then(res => {
                console.log(res.data)
                this.reset()
                this.error = null
              })
              .catch(err => {
                console.log(err.response.data.error)
                this.error = err.response.data.error
              })
          } else {
            this.error = 'Donnees non valide!'
          }
        },
      },
    }
</script>

<style scoped>

</style>
