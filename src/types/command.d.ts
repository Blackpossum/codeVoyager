export interface FrameworkConfig {
    name: string;
    version: string;
    path: string;
}

export interface MigrationStep {
    name: string;
    description: string;
    run(): Promise<void>;
}
