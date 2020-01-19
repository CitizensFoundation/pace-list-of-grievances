
const createRandomData = (length) => {
  return new Array(length).fill().map((a, i) =>  Math.round( Math.random()*(Math.random()*10) * 10 ) / 10).sort();
}

export const DataLabels = [
  "03/2014", "04/2014","07/2014","08/2014","09/2014","10/2014","11/2014","12/2014",
  "01/2015", "02/2015","03/2015", "04/2015","05/2015","06/2015","07/2015","08/2015","09/2015","10/2015","11/2015","12/2015",
  "01/2016", "02/2016","03/2016", "04/2016","05/2016","06/2016","07/2016","08/2016","09/2016","10/2016","11/2016","12/2016",
  "01/2017", "02/2017","03/2017", "04/2017","05/2017","06/2017","07/2017","08/2017","09/2017","10/2017","11/2017","12/2017",
  "01/2018", "02/2018","03/2018", "04/2018","05/2018","06/2018","07/2018","08/2018","09/2018","10/2018","11/2018","12/2018",
  "01/2019", "02/2019","03/2019", "04/2019","05/2019","06/2019","07/2019","08/2019","09/2019","10/2019","11/2019","12/2019"
]

export const Data = [
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Left Behind by Global Economy",
    description: "Decades of increased globalization lifted hundreds of millions of people out of property and more than doubled the real wealth of the top 1%; unfortunately these gains were not shared by the middle class in the First World, who saw their wealth stagnant or in decline.",
    quote: "Most of today's distressed communities have seen zero net gains in employment and business establishment since 2000. In fact, more than half have seen net losses on both fronts. Half of adults living in distressed zip codes are attempting to find gainful employment in the modern economy armed with only a high school education at best. The healthier the economy, the healthier the person — people in distressed communities die five years earlier.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Left Behind",
      borderColor: "#3e95cd",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Disintegration of Traditional Family Unit",
    description: "Declining rates of marriage, rising divorce rates, stagnant wages requiring both parents to work full time, growth of childcare as an employment sector -- all add up to anxiety and sense of loss for those who believe in traditional family unit as building block of society.",
    quote: "Despite its widespread social acceptance of single mothers, children who grow up without fathers suffer a host of social, emotional and psychological problems: crime, drugs, promiscuity, teen pregnancy, suicide, and dropouts. That’s not to say single mothers aren’t doing their best; it’s merely to say there’s only so much they can do.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Family Disintegration",
      borderColor: "#8e5ea2",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Loss of Religion as Social Organizing Force",
    description: "Though numbers of actual self identified atheists and agnostics remain in single digits, the percentage of people who identify as “unaffiliated” and do not attend church has more than doubled in the last 20 years. Western culture no longer embraces a religious approach to morality and ethics.",
    quote: "",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Loss of Religion",
      borderColor: "#3cba9f",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Alienated by the Progress of Technology",
    description: "Dubbed “future shock” over 40 years ago, the progress from pastoral, to agrarian, to industrial, to information age happened at such an accelerated rate that social adaptations and institutions were unable to keep pace. Ideas of no work and no scarcity are therefore beyond comprehension for many.",
    quote: "",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Alienated by Technology",
      borderColor: "#c45850",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Fear of Losing Cultural Identity/Ethnic Solidarity/Hegemony",
    description: "As birthrates in the developed world drop below replacement rate, and immigration becomes a driver of electoral demographics, those members of the original regional ethnic group in that country feel their culture, language and values profoundly threatened.",
    quote: "",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Cultural Identity",
      borderColor: "#953ecd",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Resentment of the Rising Radical Income Inequality",
    description: "The gap between the billionaire class and the working poor is the greatest at any time in human history since the Pharaohs had their slaves build the pyramids. Despite the modern comforts the underclasses enjoy, they understand and resent this grossly unfair distribution of economic power.",
    quote: "",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Inequality",
      borderColor: "#8ea25e",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Uncomfortable with Evolving Social Mores and Emerging Language",
    description: "Engagement with liberal ideas like feminisim, LGBTQ identity, and racial equality, through academic or media exposure, has challenged some citizens’ core beliefs about behavior and entitlement, in a way that creates angry pushback, deep suspicion and contempt for modern society.",
    quote: "",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Evolving Social Mores",
      borderColor: "#e8c3b9",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Resentment of Experts/Academics/Urban Elites/Pundit Class",
    description: "Insulation of the ivory tower, growing educational gaps between urban/rural/suburban demographics, the information economy creating new divisions of have and have nots -- all combine to create a deep suspicion of “expert” opinions, and fuels the rise of “alternative facts” and counter narratives.",
    quote: "",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Resentment of Elites",
      borderColor: "#ba3c9f",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Desire for Strong Man/Central Authority to Rectify Society",
    description: "Once trust in journalism, the media, and other political institutions is broken, many constituents look for brute force, top-down solutions to “fix” the broken society, often putting their trust in a single figure or party loyalty, as the “only solution” to the ills of a dysfunctional system.",
    quote: "",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Strong Man",
      borderColor: "#b9e8c3",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Feeling Ignored/Not Listened To by Politicians/Elites",
    description: "Harboring many or all of these misgivings, these citizens feel they have spoken up, reached out, perhaps wrote an email to political/journalistic actor in their local or national discourse; almost universally they came away feeling like their concerns were ignored.",
    quote: "",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Not Listened To",
      borderColor: "#05c458",
      fill: false
    }
  }
]