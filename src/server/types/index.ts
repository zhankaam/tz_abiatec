export type GetResponseType = {
    "info": {
        "count": number,
        "pages": number,
        "next": string,
        "prev": string
    },
    "results": CharactersResType[]
};

export type CharactersResType =  {
    "id": number
    "name": string
    "status": string
    "species": string
    "type": string
    "gender": string
    "origin": string[]
    "location": {
        name: string
        url: string
    }
    "image": string
    "episode": string[]
    "url": string
    "created": string
};
