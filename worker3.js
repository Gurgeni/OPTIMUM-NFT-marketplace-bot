let isPaused = false;
let collections = [];
let nftIds = [];

function NftProcess() {
  onmessage = (e) => {
    console.log("Worker Data:", e.data);
    if (typeof e === 'object' && e !== null) {
      if (e.data.hasOwnProperty('isPaused')) {
        console.log("Received IsPaused Data");
        isPaused = e.data.isPaused;
      } else if (Array.isArray(e.data)) {
        collections = e.data;
        console.log("Received Collections:", collections);
      }
    }
  };
}

async function NftScanner() {
  if (isPaused) {
    setTimeout(NftScanner, 100);
    return;
  }

  console.log("ForEach Started:", Date.now());
  for (let i = 0; i < collections.length; i++) {
    let offset = 0;
    while (1) {
      if (isPaused) break;
      let offset = 0;
      console.log("Inside ForEach Started:", Date.now());
      console.log("Offset:", offset);
      semiurl = collections[i].name.replace('https://ordinalswallet.com', 'https://magit.com');
      t0 = Date.now();
      let response = await fetch(semiurl + '///inscriptions?offset=' + String(offset) + '&order=PriceAscvali&listed=true');
      let data = await response.json();
      if (data == undefined || data.length == 0) break;
      console.log("Skanireba", Date.now() - t0);
      data.forEach(item => {
        let price = item.escrow.satoshi_price / 100000000;
        if (!nftIds.includes(item.id) && price <= collections[i].threshold) {
          if (isPaused) return;
          postMessage(item);
          nftIds.push(item.id);
          isPaused = true;
        }
      });
      offset = offset + 100;
    }
  }
  console.log("Finished ForEach:", Date.now());
  setTimeout(NftScanner, 100);
}

NftProcess();
NftScanner();


