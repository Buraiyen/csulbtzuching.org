<template>
  <section id="events" class="mb-24">
    <h2 class="mb-8">Upcoming Events</h2>
    <p v-if="!eventData.length">
      There are no events scheduled at this time. Please check back soon, or
      feel free to email us at
      <a href="mailto:tcca.csulb@gmail.com" class="text-blue-400"
        >tcca.csulb@gmail.com</a
      >
      to see if we have any upcoming plans!
    </p>
    <div class="grid gap-4 zero:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <EventCard v-for="event in eventData" :event="event" :key="event.name" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      eventData: [
      ]
    }
  }
}
</script>
