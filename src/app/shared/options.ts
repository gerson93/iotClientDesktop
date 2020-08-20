interface optionsSidebar {
    name: string;
    routerName: string;
    icon: string;
}

export const OPTIONS: optionsSidebar[] = [
    {
      name: 'devices',
      routerName: 'devices',
      icon: 'wifi_tethering'
    },
    {
      name: 'alarm',
      routerName: 'alarms',
      icon: 'notifications',
    },
    {
      name: 'history',
      routerName: 'history',
      icon: 'insert_chart'
    }]