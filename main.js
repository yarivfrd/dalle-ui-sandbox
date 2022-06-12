(async () => {
    try {
        console.log('genrating "tel aviv"');
        response = await fetch('https://bf.dallemini.ai/generate',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: 'tel aviv' })
            });
        console.log('response', response);

        response = await response.json();
        console.log('response json', response);

        let imgs = response.images.map(r => `data:image/png;base64,${r}`);
        console.log(imgs);

    } catch (e) {
        console.log("Too much traffic, please try again.")
    }
})();