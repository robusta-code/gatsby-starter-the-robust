export interface Author {
    name: string;
    imageUrl?: string;
    bio?: string;
    twitter?: string;
    linkedin?: string;
    nickname?: string;
}

const authors = [
    {
        name: 'Nicolas Zozol',
        imageUrl: 'nicolas-zozol.png',
        bio:
            'Former science teacher, almost serial entrepreneur and currently hard-core coder',
        twitter: 'https://twitter.com/RobustaCode',
        linkedin: 'https://www.linkedin.com/in/robustacode/',
        nickname: 'Nik'
    },
    {
        name: 'Jane Doe',
        imageUrl: 'jane.jpg',
        bio:
            'Jane is a back-end developer, she specializes in security and her favourite stack is the MERN stack',
        twitter: 'https://www.twitter.com/',
        linkedin: 'https://www.linkedin.com/',
    },
]


function findAuthor(frontmatterAuthor:string):Author {

    if (!frontmatterAuthor) {
        return findAuthor('Nik');
    }

    let byName = authors.find(author => author.name && author.name.toLowerCase() === frontmatterAuthor.trim().toLowerCase());
    if (byName) {
        return byName;
    }

    let byNickname = authors.find(author => author.nickname && author.nickname.toLowerCase() === frontmatterAuthor.trim().toLowerCase());
    if (byNickname) {
        return byNickname;
    }

    return findAuthor('Nik');
}


module.exports = {findAuthor, authors};