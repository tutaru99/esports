<template>
  <div>
    <div fluid id="bgimg">
      <v-container id="imgcontainer">
        <v-layout align-start justify-start column fill-height>
          <v-flex xs12>
            <h1 class="mt-5">WE OFFER FORTNITE TRAINING</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container class="Rectangle">
        <v-layout>
          <v-flex class="text" lg6>
            <h1 class="ml-5 mt-5 mb-3">WHAT IS FORTNITE?</h1>
            <p
              id="pf"
              class="mb-5 ml-5"
            >Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF. Use your Control as a paint brush, a conductor’s baton or a weaponized ice cream cone that launches Rocky Road at 14 scoops per second.</p>
          </v-flex>
          <v-flex lg6>
            <v-img class="img" :src="require('./../assets/fch.png')"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container mt-5 mb-5 grid-list-md>
      <v-layout align-center justify-center row wrap fill-height>
        <v-flex class="pa-2" v-for="Info in Infos" v-bind:key="Info.id" xs12 sm6 md6 lg3 xl3>
          <h4>{{Info.Title}}</h4>
          <p>{{Info.descriptionText}}</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="Rectangle2">
      <v-layout ma-5 align-center justify-center>
        <v-flex xs12>
            <h1 id="SchedueleHeadline" class="mb-5">Our Training Schedule</h1>
          <v-sheet height="400">
            <!-- now is normally calculated by itself, but to keep the calendar in this date range to view events -->
            <v-calendar ref="calendar" :now="today" :value="today" color="#2c93c6" type="week">
              <!-- the events at the top (all-day) -->
              <template v-slot:dayHeader="{ date }">
                <template v-for="event in eventsMap[date]">
                  <!-- all day events don't have time -->
                  <div
                    v-if="!event.time"
                    :key="event.title"
                    class="my-event"
                    @click="open(event)"
                    v-html="event.title"
                  ></div>
                </template>
              </template>
              <!-- the events at the bottom (timed) -->
              <template v-slot:dayBody="{ date, timeToY, minutesToPixels }">
                <template v-for="event in eventsMap[date]">
                  <!-- timed events -->
                  <div
                    id="timedEvents"
                    v-if="event.time"
                    :key="event.title"
                    :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                    class="my-event with-time"
                    @click="open(event)"
                    v-html="event.title"
                  ></div>
                </template>
              </template>
            </v-calendar>
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      today: '2019-01-08',
      events: [
        {
          title: 'Weekly Meeting',
          date: '2019-01-07',
          time: '09:00',
          duration: 45
        },
        {
          title: 'Thomas\' Birthday',
          date: '2019-01-10'
        },
        {
          title: 'Mash Potatoes',
          date: '2019-01-09',
          time: '12:30',
          duration: 180
        }
      ],
      Infos: [
                    { 
                    id: 1, 
                    Title: 'Communication', 
                    descriptionText: 'Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF.', 
                    },
                    { 
                    id: 2, 
                    Title: 'Ingame Economy', 
                    descriptionText: 'Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF.', 
                    },
                    { 
                    id: 3, 
                    Title: 'Game Awareness', 
                    descriptionText: 'Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF.', 
                    },
                    { 
                    id: 4, 
                    Title: 'Tactics and strategy', 
                    descriptionText: 'Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF.', 
                    },
                ],
    }),
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    mounted () {
      this.$refs.calendar.scrollToTime('08:00')
    },
    methods: {
      open (event) {
        alert(event.title)
      }
    }
  }
</script>


<style lang="stylus" scoped>
#pf {
  font-size: 16px;
}

#bgimg {
  background-image: url('../assets/fbg.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
}

#imgcontainer {
  height: 60vh;
}



.Rectangle {
  width: 100%;
  height: 350px;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px var(--light-periwinkle);
  background-color: var(--dark);
  position: relative;
}

.img {
  bottom: 242px;
  max-width: 566px;
  max-height: 566px;
  z-index: 1;
}

.text {
  position: relative;
}

p {
  font-size: 13px;
}

.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px;
}

.Rectangle2 {
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px var(--light-periwinkle);
  background-color: var(--dark);
}

/* Calendar */


#SchedueleHeadline {
    text-align: center;
    
}
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: var(--bluish);
  color: #ffffff;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;

  &.with-time {
    position: absolute;
    right: 4px;
    margin-right: 0px;
  }
}
</style>