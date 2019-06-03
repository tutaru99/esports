<template>
  <div class="mt-5">
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12 md6 lg6 xl6 >
          <h1>Frequently asked questions</h1>
        </v-flex>
        <v-flex id="faq" class="pa-3" xs12 md6>
         <VueFaqAccordion :items="myItems"/>
          <v-btn id="PrimaryButton" to="/rules" class="mt-5">Our Rules</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
 
<script>
import VueFaqAccordion from "vue-faq-accordion"; 

export default {
    props: {
    /**
     * Array of items
     * Object style {questionProperty: string, answerProperty: string, tabName: string}
     * You can change object keys names using other props (questionProperty, answerProperty, tabName)
     */
    items: {
      type: Array,
      required: true
    },

    /**
     * Key name of object in items array for specifying title of question
     */
    questionProperty: {
      type: String,
      default: "title"
    },

    /**
     * Key name of object in items array for specifying content text of open question
     */
    answerProperty: {
      type: String,
      default: "value"
    },

    /**
     * Key name of object in items array for specifying navigation tab name
     */
    tabName: {
      type: String,
      default: "category"
    },

    /**
     * Color for hover and active tab/question
     * possible format: 'red', '#F00', 'rgba(255, 0, 0, 1)'
     */
    activeColor: {
      type: String,
      default: "#cae1ff"
    },

    /**
     * Color for borders
     */
    borderColor: {
      type: String,
      default: "#cae1ff"
    },

    /**
     * Color for fonts
     */
    fontColor: {
      type: String,
      default: "#cae1ff"
    }
  },
  components: {
    VueFaqAccordion
  },
  data() {
    return {
      myItems: [
        {
          title: "What is eSport?",
          value:
            " eSport is an electronic sport using computer games as a competition element. In order to be a high-level performer in every sport, there is a lot of training involved both on the computer and physically. The majority of professional eSport practitioners are in good shape because it strengthens their reactions and allows them to think clearly. Being in an esports team also involves participating in tournaments and championships, qualifications and finals. eSport is creating a community where gamers can be social, share gaming experiences and learn teamworking skills. This sport is for everyone, regardless of age, language and wherever you are."
        },
        {
          title: "Did eSport come to stay?",
          value:
            "Yes, it is. The reason why it is getting more popular and attracts more people is, it pulls gamers out of their otherwise lonely existence of sitting in front of the computer. It creates a community with various events, gathers likeminded people and creates an experience. Huge tournaments are held that reward the best teams and make it a future career possibility."
        },
        {
          title: "Do People look after my child?",
          value: "Several trained coaches and pedagogues are looking after the kids, teaching how to behave properly in stressful situations and they are not allowed to swear. Our biggest goal is to have a healthy competition environment where everybody feels comfortable."
        }
      ]
    };
  }
};

</script>


<style scoped>
#faq {
  border-radius: 12px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--light-periwinkle);
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--light-periwinkle);
}

#PrimaryButton {
  background-image: linear-gradient(106deg, var(--bluish), var(--light-navy));
  color: white;
  padding: 24px 24px 24px 24px;
  font-size: 18px;
}

.faq {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;

  letter-spacing: normal;
  color: #cae1ff !important;
  text-decoration: none;
}

.accordion__item{
  border-radius: 12px !important;
  color: var(--light-periwinkle) !important;
   border-bottom: solid 1px var(--light-periwinkle) !important;
}

</style>


