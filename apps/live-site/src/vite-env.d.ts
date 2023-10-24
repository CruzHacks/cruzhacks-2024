/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_TEST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
