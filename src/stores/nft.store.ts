import { type Readable, readable } from "svelte/store";

export interface NFT {
  name: string,
  imageUrl: string,
  price: string,
  link: string,
}

export const nftStore: Readable<NFT[]> = readable([
  {
    "name": "Action 52",
    "imageUrl": "https://www.arweave.net/V898BBOf5HmhxqB3-TNGdCil48o-1EdSx7DYFTF8Gxc?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/EPXWGjRMocmZNRwPqZR6g7gSMFHyLTWPLKEvYoUdUWDW",
  },
  {
    "name": "A Nightmare on Elm",
    "imageUrl": "https://www.arweave.net/v7IscQbZfeYzveJGgFMVNusp6xZfumZxIzaatBIhFsI?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/CS9VUGeLV4pADNTfcUaFdU11b7VwrXbCHyrtCp4KKom9",
  },
  {
    "name": "Addams Family",
    "imageUrl": "https://www.arweave.net/-NnMvjYMuc_iG6mRgDFwEEKj4djdH9mVmjW2SWjX8hY?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/EuHvHYXLYuFGK2XH1M7AxGbQkoU8s9ZT7vVwm4JSUzPG",
  },
  {
    "name": "The Addams Family",
    "imageUrl": "https://www.arweave.net/ULf0qzzuEfC2xD2Zh3kvClHQLUxm_gQ4F03icVun9mw?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/8hgMNcagXCYGSSQMk1Dz7BhnrHJBLLYU9aXjh7Edxn2q",
  },
  {
    "name": "Abadox",
    "imageUrl": "https://www.arweave.net/gRR4d0XyQ6yxcnqjSIQq4sAhfOS5fxuYFchqA2rBshM?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/4B1iZxFcawD1qbX4GX5TsDyBfkbPGGAbzrQ56nuUGVi3",
  },
  {
    "name": "A Boy and His Blob",
    "imageUrl": "https://www.arweave.net/7ZAfYvlXr1e3Z5ky26WkYjwxNdgBuV-gs9ASsVnosxE?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/3FYxnBikSN2Au4VGseHScgD1BmvKgUdqWwvwYRMMFHgR",
  },
  {
    "name": "1943",
    "imageUrl": "https://www.arweave.net/DMKPW3tXG4z9Di3hZjwgTpGVKQfThalhV3_uIBNRI2I?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/DSacamxWYA5BeJswwTBoVdnvdvw6pCJt3ptHJ2e1bPi7",
  },
  {
    "name": "1942",
    "imageUrl": "https://www.arweave.net/gRt3vN-FENEDkoXdKJUfRYJy8k3PxW1FFl8QZJboHaw?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/cdzu8rexCxjN31MEcW7qZ72cgsXN79CUdPeYMs8wKTW",
  },
  {
    "name": "10-Yard Fight",
    "imageUrl": "https://www.arweave.net/bn4h8aVFxm_ZOx7aIyr6dzfpksjQP08oUKIp8Ktt4rg?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/57J7j7Zpmdr9SCmuYmucSUWXaBDZCc7nwiVW7zL4faZe",
  },
  {
    "name": "720 Degrees",
    "imageUrl": "https://www.arweave.net/C0H9vrplOLOoTJL9qmT9pZ_-4Pf_gzey9y59XjsCFvA?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/J9JUf9Ltf4aYRr8qrZ7LSpV4vJwKyMbBV7ShoACf1WKt",
  },
  {
    "name": "8 Eyes",
    "imageUrl": "https://www.arweave.net/IECMrHDpLwIvpRTTTh8oWrk2zrVySSy7_Ozr6ObSmT4?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/3w5UoAzLyqSqBpLHWA3U4PFbLxNpj9e81nbJcjeYdFH5",
  },
  {
    "name": "3-D Worldrunner",
    "imageUrl": "https://www.arweave.net/VIs3zQwcsvtfunFbJFHBEojiDvcPuly4Mstq4MtgnyY?ext=jpg",
    "price": "0.5 SOL",
    "link": "https://solsea.io/nft/8cCBLgbWZfyTU4rtcPPFNFto5GwXPbEo29NJVm7G6EDJ",
  }
]);
