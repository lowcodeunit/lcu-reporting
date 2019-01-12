import { ForgeRenderingDetails } from '@lcu/elements';

export class ForgeReportingEditDetails extends ForgeRenderingDetails<ForgeReportingEditConfig> {
    public DashboardLookup: string;

    public DatasetLookup: string;

    public EmbedLookup: string;

    public CreateOrEdit: string;

    public IsTile: boolean;

    public ReportingType: string;
}

export class ForgeReportingEditConfig {
}
