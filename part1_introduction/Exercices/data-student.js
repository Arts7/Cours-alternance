const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s4",
            {
                "name": "Naoudi",
                "mention": "",
                "notes": [14.5, 19, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/3"
            }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

const mentions = [
    { mention: "TB", notes: [17, 20] },
    { mention: "B", notes: [14, 16.99] },
    { mention: "AB", notes: [12, 13.99] },
    { mention: "P", notes: [10, 11.99] },
];

function average(array) {
    if (array.length == 0) {
        return;
    }
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average = average + array[i];
    }
    return Math.floor(average / array.length * 100) / 100;
}

const mapStudents = new Map(DataStudents);

const setMention = average => {
    for (const {mention, notes} of mentions) {
        const [min , max] = notes;
        if (average >= min && average <= max) {
            return mention;
        }
    }    
    return 'Aucune mention';
}

for (const [k, student] of mapStudents) {
    student.average = average(student.notes);
    mention = setMention(student.average);
    student.mention = mention;
}

console.log(mapStudents);