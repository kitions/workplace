<template>
  <div className="map-page">
        <MapToggleChart />
      </div>
</template>

<script>
import MapToggleChart from './components/MapToggleChart';

export default {
  name: 'Map',
  components: {
    MapToggleChart,
  },
};
</script>
