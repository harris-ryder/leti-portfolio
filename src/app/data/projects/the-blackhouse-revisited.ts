import { ProjectContent, ProjectHomepageCover } from "./projects";

// Bump `v` to bust the Blob CDN / next-image / browser caches after re-uploading an image.
const VERSION = 1;
const img = (n: number) =>
  `https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/the-blackhouse-revisited/${n}.webp?v=${VERSION}`;

export const theBlackhouseRevisitedArticle: ProjectContent[] = [
  // — Title / intro (PDF p.1)
  {
    type: "title",
    title: "The Blackhouse Revisited",
  },
  {
    type: "text",
    text: ["Princeton M.Arch Thesis"],
  },
  {
    type: "text",
    text: [
      "Advisor: Tei Carpenter",
      "",
      "Site: from Sutherland, Scottish Highlands to Barnes & Wallace Ave, the Bronx, NYC",
    ],
  },
  {
    type: "text",
    text: [
      "This thesis comes in two parts. First, there is a problem: insufficient housing stock in increasingly dense cities. Secondly, there is a precedent: the ancient typology of the Scottish Blackhouse, an iteration of the longhouse type which preceded the dominating principle of private space today.",
    ],
  },
  {
    type: "text",
    text: [
      "The Blackhouse was a dwelling for humans and animals, for working and living, for the sacred and the profane. It had in-built fungicidal, medicinal and food-preserving properties. It was erected and maintained by community co-operation using biodegradable materials worked without the need of specialist construction.",
    ],
  },
  {
    type: "text",
    text: [
      "Considered in the context of the city, the Blackhouse Revisited offers a prototype for contemporary urban living. The building, or set of buildings, acts as its own eco-system, that accommodates fluctuating residents (human and non-human) and, like a city within a city, constantly engages bodies in relation to one another.",
    ],
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(1),
    description:
      "Sectional model through final design: the Blackhouse in the Bronx, 1/32",
  },

  // — The Scottish Blackhouse precedent (PDF p.2)
  {
    type: "newColumn",
  },
  {
    type: "text",
    text: [
      "The blackhouse was built out of stones, peat, earth, thatch, timber. Stones cleared from the terrain to make way for animal fields, stones quarried nearby. The stone walls were built, torn down, rebuilt after a storm. Wells were dug to store livestock feed, or to reach the water table.",
    ],
  },
  {
    type: "image",
    src: img(2),
    description: "A Scottish Blackhouse, credit: http://www.ilbusca.com",
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(3),
    description:
      "Elphin, Sutherland, site collage showing multiple Blackhouse ruins",
  },

  // — Materials & making (PDF p.3)
  {
    type: "newColumn",
  },
  {
    type: "text",
    text: [
      "The Blackhouse is low, narrow bodied, well insulated - with 5ft thick dry-stone walls infilled with earth. It was erected and maintained by community co-operation using biodegradable materials and worked without the need for specialist tools. Contextualizing these features to a modern context, it is counter to standardization, to copy-and-paste detailing, to revit, etc. It is in opposition to the illegibility of authorship and of materials of modern cities",
    ],
  },
  {
    type: "image",
    src: img(4),
    description: "Industry of the stone wall, 1/48",
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(5),
    description: "The Blackhouse well, 1/24",
  },

  // — The Blackhouse type (PDF p.4)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(6),
    description: "The Blackhouse type, 1/48",
  },

  // — Atlas of features (PDF p.5)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(7),
    description: "Atlas of features in the Blackhouse",
  },
  {
    type: "newColumn",
  },
  {
    type: "text",
    text: [
      "The Atlas documents some key features of the Blackhouse. For example, stones cantilevered out of the side of the wall create an access for humans to reach the top of the wall and mend the thatch after a storm. The same steps are used by hens to access where they roost. Instead of bedrooms, humans sleep in box-beds, free-standing timber cabinets. This smaller space increases warmth. It works similarly to a chicken coop. Walls are 5ft high, meaning you must bow as you enter through the thick threshold.",
    ],
  },
  {
    type: "text",
    text: [
      "The ventilation of the blackhouse works for the health of the animals, the humans and the building itself. Without a chimney, smoke from the fire actually smokes the thatch, making it ideal for fertilizer when it is removed. The smoke also preserves hanging meat, and extinguishes rising sparks from the fire. From the cows urine, ammonia evaporates and rises, following the pitch of the roof, enters into the human space. This ammonia actually protected the humans from tuberculosis. Crucially, the heat from the animals also moves into the human side of the house thanks to the roof pitch. The ill-fitting timber door and hen-hole allow constant ventilation.",
    ],
  },

  // — The Bronx site (PDF p.6)
  {
    type: "newColumn",
  },
  {
    type: "text",
    text: [
      "In keeping with the long house tradition, I looked at slim vacant lots in NYC, of which there are many as developers don't know what to do with them. Two thin lots in the Bronx create one long site. It is here, in this dense (r5 zoning), low-rise neighborhood that I have proposed a prototype.",
    ],
  },
  {
    type: "image",
    src: img(8),
  },
  {
    type: "image",
    src: img(9),
    description: "Strretview of vacant lot, Barnes & Wallace Ave, the Bronx",
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(10),
    description:
      "2 Aligned vacant lots in the Bronx, join to make a long and thin lot",
  },

  // — Early design iterations (PDF p.7)
  {
    type: "newColumn",
  },
  {
    type: "text",
    text: [
      "Interested in the idea of the box bed – I cut individual sleeping units into thee 5ft thick wall. 4 barns across the long lot have distinct zones: dining/ work from home (with nooks for desk pods in the wall), cooking, food smoking and storing, and relaxing. Each zone is flanked by the beds in the wall, creating the opportunity for a high density of people living together. Based on the area of the site and the averages of the Van Nest neighborhood, 4 households would be typical to fit here, totalling around 11 people. In this scheme, at least 24 people live here, not including the animals in the animal shelter and pets.",
    ],
  },
  {
    type: "text",
    text: [
      "Then next key move was to elevate the blackhouse up a story to allow for a vehicle.",
    ],
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(11),
    description: "Early plan and section studies, 1/96",
  },
  {
    type: "image",
    src: img(12),
    description: "Elevating the Blackhouse section to make vehicle parking",
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(13),
  },
  {
    type: "image",
    src: img(14),
    description: "Iterations on the plan, 1/96",
  },

  // — Second iteration (PDF p.8)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(15),
    description: "Second iteration with raised barn design, 1/96",
  },

  // — Sections through initial design (PDF p.9)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(16),
    description: "Short section through inital design, 1/24",
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(17),
    description: "Zoom in: cow and box bed side-by-side",
  },

  // — Massing model (PDF p.10)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(18),
  },
  {
    type: "image",
    src: img(19),
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(20),
  },
  {
    type: "image",
    src: img(21),
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(22),
  },
  {
    type: "image",
    src: img(23),
    description:
      "Massing model: testing different 'hats' for roof shape following 40/20 deg pitch from the Blackhouse, 1/16",
  },

  // — Finalised plans (PDF p.11)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(24),
    description: "Finalised upper level and ground floor plan, 1/64",
  },

  // — Section through neighbours & details (PDF p.12)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(25),
    description: "Short section through neighbours & Blackhouse, 1/48",
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(26),
    description:
      "Detail of public WC and water fountain on street-facing facade, 1/12",
  },
  {
    type: "image",
    src: img(27),
    description:
      "Detail of walkway to public showers in interior courtyard, 1/12",
  },

  // — Inhabited section (PDF p.13–14)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(28),
    description: "Inhabited section, 1/32",
  },

  // — Final model, colour photographs + text (PDF p.15)
  {
    type: "newColumn",
  },
  {
    type: "text",
    text: [
      "Aureli, in his research of longhouses (of which the Blackhouse falls under) noted that the long house complicated the imposition of private property and modern forms of dwelling are a result of the destructions of such modes of dwelling.",
    ],
  },
  {
    type: "text",
    text: [
      "The result, as you can see in this section, is a highly urban condition – the set of buildings are like subway cars, connected by platforms and creating courtyards for planting, and animal roaming.",
    ],
  },
  {
    type: "text",
    text: [
      "Each bed box and hole in the wall for sitting, a toilet, a sink or a work pod has a window. The bed boxes within each building create mini cities themselves. Protrusions of sheet metal chimneys and roofs makes formally legible the exhaust, HVAC and MEP systems.",
    ],
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(29),
    description: "From in-construction (left) to inhabited (right), 1/32",
  },
  {
    type: "image",
    src: img(30),
    description: "Interior courtyard, cellar and living spaces in model, 1/32",
  },

  // — Interior details from model (PDF p.16)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(31),
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(32),
  },
  {
    type: "image",
    src: img(33),
    description: "Interior details from model, 1/32",
  },

  // — Man with model (PDF p.17)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(34),
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(35),
    description: "Man with model (9ft x 1ft)",
  },

  // — Thesis presentation (PDF p.18)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(36),
  },
  {
    type: "image",
    src: img(37),
  },
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(38),
    description: "Photographs from Thesis Presentation",
  },

  // — Final model (PDF p.19)
  {
    type: "newColumn",
  },
  {
    type: "image",
    src: img(39),
  },
];

export const theBlackhouseRevisitedHomepageCovers: ProjectHomepageCover[] = [
  {
    src: img(5),
    desktopWidth: 33,
    mobileWidth: 100,
  },
  {
    src: img(31),
    desktopWidth: 30,
    mobileWidth: 100,
  },
];
