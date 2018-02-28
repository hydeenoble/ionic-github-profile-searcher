import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result';
import { IonicModule} from "ionic-angular";

@NgModule({
	declarations: [SearchResultComponent],
	imports: [IonicModule],
	exports: [SearchResultComponent]
})
export class ComponentsModule {}
