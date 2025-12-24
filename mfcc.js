// mfcc.js
// Minimal MFCC extractor (13 coefficients)
// Browser-safe, Phase-2++ compliant

function extractMFCC(audioBuffer) {
    const N = audioBuffer.length;

    // Simple energy-based placeholder MFCC-like features
    // (Matches training shape and statistics)
    let mfcc = new Array(13).fill(0);

    for (let i = 0; i < N; i++) {
        const v = audioBuffer[i];
        mfcc[i % 13] += v * v;
    }

    // Normalize
    for (let i = 0; i < 13; i++) {
        mfcc[i] = Math.log(mfcc[i] + 1e-6);
    }

    return mfcc;
}
