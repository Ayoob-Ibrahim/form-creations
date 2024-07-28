import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import view from 'ol/View';
import { fromLonLat, toLonLat, transform } from 'ol/proj.js';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import { Feature, Overlay } from 'ol';
import { Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Vector from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import olFeature from 'ol/Feature.js';
import VectorSource from 'ol/source/Vector';
import TileJSON from "ol/source/TileJSON";
import { toStringHDMS } from 'ol/coordinate';


@Component({
    selector: 'app-injectable-modal',
    templateUrl: './injectable-modal.component.html',
    styleUrls: ['./injectable-modal.component.scss']
})
export class InjectableModalComponent implements OnInit {
    name: string;
    constructor(
        private _mdr: MatDialogRef<InjectableModalComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ) {

        this.name = data.name;
    }
    ngOnInit(): void {
        this.initilizeMap();
    }
    CloseDialog() {
        this._mdr.close("hey")
    }

    map;
    locationlatlong;

    initilizeMap() {
        const initialState = {
            lng: 46.7024,
            lat: 24.9596,
            zoom: 16,
        };

        const container = document.getElementById('popup');
        const content = document.getElementById('popup-content');
        const closer = document.getElementById('popup-closer');


        const overlay = new Overlay({
            element: container,
            autoPan: true,
        });
        const map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM(
                        {
                            url: 'https://mt{0-3}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
                            // http://tile.thegoldenelement.com/hot/{z}/{x}/{y}.png
                        }
                    ),
                })
            ],
            overlays: [overlay],
            target: 'map',
            view: new View({
                center: transform(
                    [initialState.lng, initialState.lat],
                    'EPSG:4326',
                    'EPSG:3857',
                ),
                zoom: initialState.zoom
            })
        });

        map.on('singleclick', function (evt: any) {
            this.locationlatlong=""
            const coordinate = evt.coordinate;
            const hdms = toStringHDMS(toLonLat(coordinate));
            content.innerHTML = '<i class="bi bi-sign-turn-left"></i><code>' + hdms +
                '</code>';
            overlay.setPosition(coordinate);

            this.locationlatlong = hdms
            console.log(this.locationlatlong)

        });


        closer.onclick = function () {
            overlay.setPosition(undefined);
            closer.blur();
            return false;
        };
    }















}
