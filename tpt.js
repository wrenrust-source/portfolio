(function(){
    const tptFolder = 'Assets/TPT/';
    const tptFiles = [
        '1AddAndSubtractSnowballs.png',
        '2.png',
        '3LetterSoundSort.png',
        '4.png',
        '4LongASort.jpg',
        '5LongISentences.jpg',
        '6LongIBundle.jpg',
        'artmatch.png',
        'ColorSchemes.png',
        'CoverPages (1) copy.jpg',
        'CoverPages (2) copy.jpg',
        'longBundle.jpg'
    ];
    const links = {
        '1AddAndSubtractSnowballs.png': 'https://www.teacherspayteachers.com/Product/Snowball-Matching-Addition-and-Subtraction-Within-10-3-Works-Included-10072366',
        '2.png': 'https://www.teacherspayteachers.com/Product/Elements-Principles-of-Art-Sort-Match-Note-Guide-15273672',
        '3LetterSoundSort.png': 'https://www.teacherspayteachers.com/Product/Letter-Sound-Sorts-Science-of-Reading-Aligned-INCLUDES-6-SORTS-10088008',
        '4.png': 'https://www.teacherspayteachers.com/Product/Tree-Identification-Matching-Cards-Dichotomous-Key-Included-14109995',
        '4LongASort.jpg': 'https://www.teacherspayteachers.com/Product/Long-a-vowel-teams-AI-AY-Word-Picture-Match-and-Sort-10927555',
        '5LongISentences.jpg': 'https://www.teacherspayteachers.com/Product/Long-i-vowel-teams-IE-IGH-Y-Sentence-Picture-Match-9892582',
        '6LongIBundle.jpg': 'https://www.teacherspayteachers.com/Product/Long-i-vowel-teams-IE-IGH-Y-BUNDLE-Science-of-Reading-aligned-Decodable-9892939',
        'artmatch.png': 'https://www.teacherspayteachers.com/Product/Western-Art-History-Movements-Match-16108248',
        'ColorSchemes.png': 'https://www.teacherspayteachers.com/Product/Color-Schemes-Sort-15193191',
        'CoverPages (1) copy.jpg': 'https://www.teacherspayteachers.com/Product/Western-Art-History-Timeline-Sort-11781071',
        'CoverPages (2) copy.jpg': 'https://www.teacherspayteachers.com/Product/Source-Evaluation-Sort-Analog-Version-Mini-Poster-Included-11997777',
        'longBundle.jpg': 'https://www.teacherspayteachers.com/Product/Long-Vowel-Teams-Decodable-Passages-Science-of-Reading-Bundle-11105276'
    };
    const tptContainer = document.getElementById('tptGrid');

    if (!tptContainer) return;

    tptFiles.forEach(filename => {
        const link = document.createElement('a');
        link.href = links[filename];
        link.target = '_blank';
        link.rel = 'noopener';

        const image = document.createElement('img');
        image.src = tptFolder + filename;
        image.alt = filename;
        image.loading = 'lazy';

        link.appendChild(image);
        tptContainer.appendChild(link);
    });
})();
