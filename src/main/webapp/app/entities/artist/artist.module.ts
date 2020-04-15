import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HipstermusicSharedModule } from 'app/shared/shared.module';
import { ArtistComponent } from './artist.component';
import { ArtistDetailComponent } from './artist-detail.component';
import { ArtistUpdateComponent } from './artist-update.component';
import { ArtistDeleteDialogComponent } from './artist-delete-dialog.component';
import { artistRoute } from './artist.route';

@NgModule({
  imports: [HipstermusicSharedModule, RouterModule.forChild(artistRoute)],
  declarations: [ArtistComponent, ArtistDetailComponent, ArtistUpdateComponent, ArtistDeleteDialogComponent],
  entryComponents: [ArtistDeleteDialogComponent]
})
export class HipstermusicArtistModule {}
