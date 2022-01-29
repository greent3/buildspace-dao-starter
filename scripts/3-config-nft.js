import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD24cA1903C3cc01C39D72EB7F3D7EF2FEE45A18C",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Anti-graduation cap",
        description: "This NFT will give you access to DropoutDAO!",
        image: readFileSync("scripts/assets/college-dropout.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()