export interface Testimonial {
  logo: string;
  description: string;
  persona: string;
  url: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    logo: "./logos/gnosisGray.png",
    persona: "Team Gnosis",
    description: `Web3api will make it easy for everyone to build on top of Gnosis
    technologies and interact with our contracts and interfaces. This will
    help us achieve our vision of building open platforms and removing
    gatekeepers`,
    url: "https://gnosis.io/",
  },
  {
    logo: "./logos/abridgedGray.png",
    persona: "James Duncan, Co-Founder",
    description: `Web3API aligns with Abridged's vision of lowering the barrier for smart contract 
    "remixing". More importantly the team behind the project is smart, passionate and know how to ship. 
    We can not wait to integrate Web3API in to our no-code platform and fulfil 
    the vision of making money legos accessible to everyone.`,
    url: "https://abridged.io/",
  },
  {
    logo: "./logos/pocketGray.png",
    persona: "Michael O'Rourke, CEO",
    description: `By creating one single standard for Web3 developers, 
    the complexity and user experience of accessing the basic building 
    blocks for these protocols is massively improved. Pocket aims to 
    provide a neutral networking stack, allowing Web3API users to easily
    connect to any protocol they are building on.`,
    url: "https://www.pokt.network",
  },
  {
    logo: "./logos/fleekGray.png",
    persona: "Harrison Hines, CEO",
    description: `Our leading product (the open source Space Daemon for building dweb apps) 
    currently only works on desktop, and the most elegant way we can get it to work in the 
    browser and mobile (without centralizing some aspects of the Daemon) is with Web3API. 
    Also the experience for developers building dweb apps on top of the Space Daemon will 
    be much better once we convert it into Web3API modules.`,
    url: "https://fleek.co/",
  },
  {
    logo: "./logos/squadGray.png",
    persona: "Jesse B. Miller, Co-Founder",
    description: `We’re building a platform that needs to run anywhere, 
    integrate with other projects, and provide a welcoming developer experience. 
    Web3API shows more promise than any other tool we’ve seen to do that 
    elegantly and efficiently.`,
    url: "https://squad.games/",
  },
  {
    logo: "./logos/rocksideGray.png",
    persona: "Vincent Le Gallic, CTO & Co-Founder",
    description: `Rockside is simplifying the usage of blockchain thanks to its 
    relayer and  meta-transactions. We want to push further the simplification of 
    the integration of blockchain solutions client-side. The Web3API project 
    is inline with our goal to facilitate the usage of Ethereum for all developers, 
    and it looks very promising.`,
    url: "https://rockside.io/",
  },
  {
    logo: "./logos/mantradaoGray.png",
    persona: "John Patrick Mullin, Co-Founder",
    description: `With cross-chain DeFi products at the core of what MANTRA DAO is building, 
    this inherently involves building a tech stack that is blockchain and programming language 
    agnostic. We believe that what Web3API is building is truly novel, and are looking forward 
    to being a launch partner and strong participant within the Web3API DAO.
    `,
    url: "https://mantradao.com/",
  },
];

export const launchPartners = [
  {
    logo: "./logos/fleekGray.png",
    url: "https://fleek.co/"
  },
  {
    logo: "./logos/abridgedGray.png",
    url: "https://abridged.io/"
  },
  {
    logo: "./logos/mantradaoGray.png",
    url: "https://mantradao.com/"
  },
  {
    logo: "./logos/rocksideGray.png",
    url: "https://rockside.io/"
  },
  {
    logo: "./logos/torusGray.png",
    url: "https://tor.us/"
  },
  {
    logo: "./logos/pocketGray.png",
    url: "https://www.pokt.network/"
  },
  {
    logo: "./logos/gnosisGray.png",
    url: "https://gnosis.io/"
  },
  {
    logo: "./logos/dxdaoGray.png",
    url: "https://dxdao.eth.link/#/"
  },
  {
    logo: "./logos/squadGray.png",
    url: "https://squad.games/"
  },
  {
    logo: "./logos/dorgGray.png",
    url: "https://dorg.tech/"
  }
]