import type { ProviderWithModels } from "@modelpedia/data";

export const autorplyProviders: ProviderWithModels[] = [
  {
    id: "humain",
    name: "HUMAIN",
    icon: '<svg width="1024" height="1025" viewBox="0 0 1024 1025" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect y="0.53125" width="1024" height="1024" rx="60" fill="white"/>\n<path d="M744.747 341.168H280.309V217.531H165V807.531H280.309V683.254H744.107V807.531H859.417V217.531H744.107V341.809L744.747 341.168ZM280.309 576.271V448.149H744.107V576.271H280.309Z" fill="black"/>\n</svg>',
    description:
      "Saudi AI company building sovereign AI infrastructure, models, and applications.",
    type: "direct",
    region: "SA",
    headquarters: "Riyadh, Saudi Arabia",
    url: "https://www.humain.ai",
    api_url: "https://www.humain.ai/en/humain-iq/",
    docs_url: "https://www.humain.ai/en/humain-iq/",
    pricing_url: "https://www.humain.ai/en/humain-iq/",
    models_url: "https://www.humain.ai/en/humain-iq/",
    models: [
      {
        id: "allam-34b",
        name: "ALLAM 34B",
        created_by: "humain",
        source: "community",
        last_updated: "2026-08-09",
        family: "ALLAM",
        description:
          "HUMAIN's flagship Arabic-first large language model, built, hosted, and operated in Saudi Arabia.",
        page_url: "https://www.humain.ai/en/humain-iq/",
        status: "active",
        parameters: 34,
        model_type: "chat",
        modalities: {
          input: ["text"],
          output: ["text"],
        },
      },
    ],
  },
];
