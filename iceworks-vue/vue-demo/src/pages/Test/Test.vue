<template>
  <div className="test-page">
        <TabTable />
        <DataDisplay />
        <DataDisplay1 />
        <SimpleFooter />
      </div>
</template>

<script>
import TabTable from './components/TabTable';
import BasicForm from './components/BasicForm';
import DataDisplay from './components/DataDisplay';
import DataDisplay1 from './components/DataDisplay1';
import SimpleFooter from './components/SimpleFooter';

export default {
  name: 'Test',
  components: {
    TabTable,
    BasicForm,
    DataDisplay,
    DataDisplay1,
    SimpleFooter,
  },
};
</script>
