import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// stacks/ExampleStack.ts
import { NextjsSite } from "sst/constructs";
function ExampleStack({ stack, app }) {
  const stage = app.stage;
  const site = new NextjsSite(stack, "Site", {
    path: "frontend",
    customDomain: {
      domainName: stage !== "" ? `${stage}.ngenstudios.com` : "ngenstudios.com",
      hostedZone: "ngenstudios.com"
    },
    environment: {
      REGION: app.region
    }
  });
  stack.addOutputs({
    URL: site.url || "localhost:3000"
  });
}
__name(ExampleStack, "ExampleStack");

// stacks/Storage.ts
import { Bucket } from "sst/constructs";
function Storage({ stack }) {
  const bucket = new Bucket(stack, "Uploads");
  return {
    bucket
  };
}
__name(Storage, "Storage");

// sst.config.ts
var sst_config_default = {
  config(_input) {
    return {
      name: "nextjs-app",
      region: "us-east-1"
    };
  },
  stacks(app) {
    app.stack(ExampleStack).stack(Storage);
  }
};
export {
  sst_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3RhY2tzL0V4YW1wbGVTdGFjay50cyIsICJzdGFja3MvU3RvcmFnZS50cyIsICJzc3QuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge05leHRqc1NpdGUsIFN0YWNrQ29udGV4dH0gZnJvbSBcInNzdC9jb25zdHJ1Y3RzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBFeGFtcGxlU3RhY2soe3N0YWNrLCBhcHB9OiBTdGFja0NvbnRleHQpIHtcbiAgICBjb25zdCBzdGFnZSA9IGFwcC5zdGFnZTtcbiAgICAvLyBDcmVhdGUgYSBOZXh0LmpzIHNpdGVcbiAgICBjb25zdCBzaXRlID0gbmV3IE5leHRqc1NpdGUoc3RhY2ssIFwiU2l0ZVwiLCB7XG4gICAgICAgIHBhdGg6IFwiZnJvbnRlbmRcIixcbiAgICAgICAgY3VzdG9tRG9tYWluOiB7XG4gICAgICAgICAgICBkb21haW5OYW1lOiBzdGFnZSAhPT0gXCJcIiA/IGAke3N0YWdlfS5uZ2Vuc3R1ZGlvcy5jb21gIDogXCJuZ2Vuc3R1ZGlvcy5jb21cIixcbiAgICAgICAgICAgIGhvc3RlZFpvbmU6IFwibmdlbnN0dWRpb3MuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgICAgIFJFR0lPTjogYXBwLnJlZ2lvbixcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHN0YWNrLmFkZE91dHB1dHMoe1xuICAgICAgICBVUkw6IHNpdGUudXJsIHx8IFwibG9jYWxob3N0OjMwMDBcIixcbiAgICB9KTtcbn1cbiIsICJpbXBvcnQge0J1Y2tldCwgU3RhY2tDb250ZXh0fSBmcm9tIFwic3N0L2NvbnN0cnVjdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JhZ2Uoe3N0YWNrfTogU3RhY2tDb250ZXh0KSB7XG4gICAgLy8gQ3JlYXRlIGEgTmV4dC5qcyBzaXRlXG4gICAgY29uc3QgYnVja2V0ID0gbmV3IEJ1Y2tldChzdGFjaywgXCJVcGxvYWRzXCIpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWNrZXRcbiAgICB9XG59XG4iLCAiaW1wb3J0IHtTU1RDb25maWd9IGZyb20gXCJzc3RcIjtcbmltcG9ydCB7RXhhbXBsZVN0YWNrfSBmcm9tIFwiLi9zdGFja3MvRXhhbXBsZVN0YWNrXCJcbmltcG9ydCB7U3RvcmFnZX0gZnJvbSBcIi4vc3RhY2tzL1N0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbmZpZyhfaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dGpzLWFwcFwiLFxuICAgICAgICAgICAgcmVnaW9uOiBcInVzLWVhc3QtMVwiLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgc3RhY2tzKGFwcCkge1xuICAgICAgICBhcHAuc3RhY2soRXhhbXBsZVN0YWNrKS5zdGFjayhTdG9yYWdlKVxuICAgIH0sXG59IHNhdGlzZmllcyBTU1RDb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7OztBQUFBLFNBQVEsa0JBQStCO0FBRWhDLFNBQVMsYUFBYSxFQUFDLE9BQU8sSUFBRyxHQUFpQjtBQUNyRCxRQUFNLFFBQVEsSUFBSTtBQUVsQixRQUFNLE9BQU8sSUFBSSxXQUFXLE9BQU8sUUFBUTtBQUFBLElBQ3ZDLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxNQUNWLFlBQVksVUFBVSxLQUFLLEdBQUcsMEJBQTBCO0FBQUEsTUFDeEQsWUFBWTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDVCxRQUFRLElBQUk7QUFBQSxJQUNoQjtBQUFBLEVBQ0osQ0FBQztBQUVELFFBQU0sV0FBVztBQUFBLElBQ2IsS0FBSyxLQUFLLE9BQU87QUFBQSxFQUNyQixDQUFDO0FBQ0w7QUFqQmdCOzs7QUNGaEIsU0FBUSxjQUEyQjtBQUU1QixTQUFTLFFBQVEsRUFBQyxNQUFLLEdBQWlCO0FBRTNDLFFBQU0sU0FBUyxJQUFJLE9BQU8sT0FBTyxTQUFTO0FBRTFDLFNBQU87QUFBQSxJQUNIO0FBQUEsRUFDSjtBQUNKO0FBUGdCOzs7QUNFaEIsSUFBTyxxQkFBUTtBQUFBLEVBQ1gsT0FBTyxRQUFRO0FBQ1gsV0FBTztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLElBQ1o7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPLEtBQUs7QUFDUixRQUFJLE1BQU0sWUFBWSxFQUFFLE1BQU0sT0FBTztBQUFBLEVBQ3pDO0FBQ0o7IiwKICAibmFtZXMiOiBbXQp9Cg==
