 <template>
 
  <v-container>
      <v-layout column>
            <v-flex xs12 xl3 lg3 md4>
                <router-link to="/" class="ma-3">
                    <img src="../assets/logo.png" alt="Logo" height="137px" class="mt-5">
                </router-link>
                <h3 class="mb-3">ESPORT ESBJERG</h3>
                <h4 class="mb-3">+45 76 16 30 50 <br> INFO@esport-esbjerg.dk <br> STREET 10 <br> 6700 ESBJERG</h4>
            </v-flex>
        </v-layout>
        <hr class="mb-1">
        <v-layout>
            <v-dialog
      v-model="dialog"
      width="500">
      <template v-slot:activator="{ on }">
        <v-btn flat color="blue" id="privacy"
          v-on="on">Privacy Policy
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline blue lighten-2 white--text"
          primary-title >
          Privacy Policy
        </v-card-title>
        <v-card-text>
We may collect other information that cannot be readily used to identify you,
 such as (for example) the domain name and IP address of your computer. We may use
  this information, individually or in the aggregate, for technical administration
   of our Web site(s); research and development; customer- and account administration;
    and to help us focus our marketing efforts more precisely.
Cookies
Company Name uses “cookies” to store personal data on your computer. 
We may also link information stored on your computer in cookies with 
personal data about specific individuals stored on our servers. 
If you set up your Web browser (for example, Internet Explorer or Firefox) 
so that cookies are not allowed, you might not be able to use some or 
all of the features of our Web site(s).

External data storage sites
We may store your data on servers provided by third party hosting 
vendors with whom we have contracted.

Your privacy responsibilities
To help protect your privacy, be sure:

not to share your user ID or password with anyone else;
to log off the Company Name Web site when you are finished;
to take customary precautions to guard against “malware” (
    viruses, Trojan horses, bots, etc.), for example by installing and updating suitable anti-virus software.
Notice to European Union users
Company Name‘s operations are located primarily in the United States. 
If you provide information to us, the information will be transferred out
 of the European Union (EU) to the United States. By providing personal
  information to us, you are consenting to its storage and use as described herein.

Information collected from children
You must be at least 13 years old to use Company Name‘s Web site(s) 
and service(s). Company Name does not knowingly collect information from
 children under 13. (See the U.S. Children’s Online Privacy Protection Act.)
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
            <v-spacer></v-spacer>
            <p>2019</p>
      </v-layout>
  </v-container>
  
 </template>


<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
 

<style>

h4 {
font-size: 12px;
font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  letter-spacing: 2.6px;
  color: #cae1ff;
  text-transform: uppercase;
}


h3{
font-size: 25.5px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
}


hr {
    color: #cae1ff;
}

a {font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #cae1ff;
  text-decoration: none;
 }

 p {font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #cae1ff;
  text-decoration: none;
 }
</style>
    