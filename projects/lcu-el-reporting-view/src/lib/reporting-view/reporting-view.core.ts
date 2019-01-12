import { ForgeRenderingDetails } from '@lcu/elements';

export class ForgeReportingViewDetails extends ForgeRenderingDetails<ForgeReportingViewConfig> {
	public DashboardLookup: string;

	public EmbedLookup: string;

    public IsTile: boolean;

    public Height: string;

    public ReportingType: string;
}

export class ForgeReportingViewConfig {
}
