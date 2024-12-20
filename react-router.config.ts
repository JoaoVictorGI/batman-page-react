import type { Config } from "@react-router/dev/config"

export default {
    appDirectory: "src",
    ssr: true,
    prerender: ["/", "/contacts", "/photos"],
} satisfies Config;