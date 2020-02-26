import { Injectable } from '@angular/core';
import { BaseSolutionsService } from '@lcu/solutions';
import { SolutionModuleConfig } from '@lcu/elements';
// import { __sln__DisplayModule } from '@the-scope/lcu-sln-the-solution';
// import { __el__DisplayModule } from '@the-scope/lcu-el-the-element';

@Injectable({
	providedIn: 'root'
})
export class ReportingDemoForgeSolutionsService extends BaseSolutionsService {
	//	Fields

	//	Constructor

	//	API Methods

	//	Helpers
	protected initSolutionModules() {
		this.localSolutionModules = [
      {
        Name: 'Solutions',
        Icon: 'fullscreen',
        BaseKey: 'forge-solution',
        Modules: <SolutionModuleConfig[]>[
          // {
          //   Name: '__the-solution-name__',
          //   Control: { Base: 'forge-solution', Details: {}, Type: 'the-solution-type' },
          //   Solution: __sln__DisplayModule,
          //   DisplaySetups: [
          //     {
          //       Name: '__the-solution-name__',
          //       Icon: 'insert_chart',
          //       BaseKey: '__sln-key__',
          //       Modules: [
          //         {
          //           Name: '__the-element-name__',
          //           Control: { Base: '__sln-key__', Details: { Elements: [], Configs: [] }, Type: 'element-name' },
          //           Display: __el__DisplayModule,
          //           HideDrag: false,
          //           BuilderState: 'Render',
          //         },
          //       ]
          //     },
          //   ],
          // },
        ],
      },
		];
	}
}
