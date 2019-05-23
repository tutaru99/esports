<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 md6 lg6 xl6>
          <h1>Frequently asked questions</h1>
        </v-flex>

        <VueFaqAccordion :items="myItems"/>
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
          title: "How many time zones are there in all?",
          value:
            "Given a 24-hour day and 360 degrees of longitude around the Earth",
          
        },
        {
          title: "How long is a day and year on Venus?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
          
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
         
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
</style>


