<template>
  <div>LINE CHART</div>
  <line-chart :data="{ '2021-01-01': 11, '2021-01-02': 6 }"></line-chart>

  <line-chart :data="{ foo: 11, bar: 6, xorg: 4, zelda: 14, nada: 2 }"></line-chart>

  <pie-chart
    :data="[
      ['Blueberry', 44],
      ['Strawberry', 23]
    ]"
  ></pie-chart>

  <column-chart
    :data="[
      ['Sun', 32],
      ['Mon', 46],
      ['Tue', 28]
    ]"
  ></column-chart>

  <bar-chart
    :data="[
      ['Work', 32],
      ['Play', 1492]
    ]"
  ></bar-chart>

  <area-chart :data="{ '2021-01-01': 11, '2021-01-02': 6 }"></area-chart>

  <scatter-chart
    :data="[
      [174.0, 80.0],
      [176.5, 82.3]
    ]"
    xtitle="Size"
    ytitle="Population"
  ></scatter-chart>
</template>
