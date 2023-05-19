# OPTIMUM-NFT-marketplace-bot
 Monitoring prices of NFTs , automation of psbt-signing and buying process 

Let me provide a detailed overview of the specifications and parameters of OPTIMUM:

1. Scanning (500ms): OPTIMUM efficiently detects newly listed NFTs within a maximum scanning time of 500 milliseconds. During scanning, minibots in OPTIMUM send requests to the ordinalswallet.com server and receive responses within an average of 500 milliseconds. While a faster internet connection may marginally improve scanning speed, the overall difference will not be significantly significant. I have also assessed the suggested alternative approach for scanning, but it does not offer a noticeable advantage.

2. Building "psbt-transaction" (600ms): Upon detecting an NFT during scanning, OPTIMUM initiates the first request to the server to build a "psbt-transaction." The response time for this process typically ranges between 300 to 600 milliseconds.

3. Finalizing and signing (400ms): Once the psbt-transaction is received, it must be signed with the private key or seed and subsequently finalized. This step involves computational processes executed on your machine, and the speed depends on your machine's specifications.

4. Broadcasting transaction (buying) (500ms): The final step involves sending the signed and finalized transaction to the network. The request is sent to the server, and the response is received within an average time of 500 milliseconds.

In summary, the overall time required for these steps is calculated as follows: 500ms + 600ms + 400ms + 500ms = 2000 milliseconds = 2 seconds.

As evident, these parameters are influenced by the speed of your internet connection and the specifications of your machine. While utilizing a faster internet connection and machine may yield some improvement, the difference will not be significantly significant. Therefore, this version of OPTIMUM as my other Bots represents the optimal  solution from a programmatic standpoint, where further enhancements are not feasible.
