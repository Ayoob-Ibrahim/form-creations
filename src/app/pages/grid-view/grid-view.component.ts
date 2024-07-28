import { Component, Inject, OnInit, ViewChild } from '@angular/core';
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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface coordinates {
  lat: number;
  lng: number;
}
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  ngOnInit(): void {
    // this.openlayerwithpointers()
    this.initilizeMap()
    this.test()
  }
  @ViewChild("mapElement", { static: false }) mapElement;














  map;
  testp;
  vectorSource;
  vectorLayer;
  rasterLayer;
  latlong: any = [46.7024, 24.9596];



  openlayerwithpointers() {
    this.testp = new Feature({
      geometry: new Point(fromLonLat([46.7024, 24.9596]))
    });

    this.testp.setStyle(new Style({
      image: new Icon(({
        color: 'GREEN',
        crossOrigin: 'anonymous',
        src: '../assets/vtstrackhisIcon/Idle.png',

      }))
    }));

    this.vectorSource = new VectorSource({
      features: [this.testp]
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });

    this.rasterLayer = new TileLayer({
      source: new TileJSON({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
        crossOrigin: ''
      })
    })


    this.map = new Map({
      target: 'map',
      layers: [new TileLayer({
        source: new OSM()
      }), this.vectorLayer, this.rasterLayer],
      view: new View({
        center: fromLonLat([46.7024, 24.9596]),
        zoom: 15,
      })
    });



    setTimeout(() => {
      // this.clearLayers(this.map, [1, 2]);
    }, 2000);
  }







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
      const coordinate = evt.coordinate;
      console.log(coordinate, "co -ordinate")
      const hdms = toStringHDMS(toLonLat(coordinate));
      console.log(toLonLat(coordinate), "co -ordinate to lat on");

      content.innerHTML = '<i class="bi bi-sign-turn-left"></i><code>' + hdms +
        '</code>';
      overlay.setPosition(coordinate);


      console.log(hdms)

    });


    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };
  }







  clearLayers(map: any, data: any) {
    for (var i = 0; i < data.length; i++) {
      map.getLayers().item(data[i]).getSource().clear();
    }
  }















  test() {
    const latitudeDMS = "24° 57′ 35″ N";
    const longitudeDMS = "46° 42′ 21″ E";

    const latitudeDecimal = this.dmsToDecimal(latitudeDMS);
    const longitudeDecimal = this.dmsToDecimal(longitudeDMS);
    let arr = [longitudeDecimal, latitudeDecimal]
     
  }





  dmsToDecimal(dms: string): number {
    const parts = dms.split(' ');
    if (parts.length === 4) {
      const degrees = parseFloat(parts[0]);
      const minutes = parseFloat(parts[1].replace('′', ''));
      const seconds = parseFloat(parts[2].replace('″', ''));
      const hemisphere = parts[3].toUpperCase();

      const decimalDegrees = degrees + minutes / 60 + seconds / 3600;


      if (hemisphere === 'S' || hemisphere === 'W') {
        return -decimalDegrees;
      }

      return decimalDegrees;
    }

    return NaN;
  }






}

