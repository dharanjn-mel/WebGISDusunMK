ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([428750.688175, 9145232.409677, 430547.514770, 9146152.008266]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Bangunan_Dekat_Jamal_1 = new ol.format.GeoJSON();
var features_Bangunan_Dekat_Jamal_1 = format_Bangunan_Dekat_Jamal_1.readFeatures(json_Bangunan_Dekat_Jamal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Bangunan_Dekat_Jamal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Dekat_Jamal_1.addFeatures(features_Bangunan_Dekat_Jamal_1);
var lyr_Bangunan_Dekat_Jamal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Dekat_Jamal_1, 
                style: style_Bangunan_Dekat_Jamal_1,
                popuplayertitle: 'Bangunan_Dekat_Jamal',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Dekat_Jamal_1.png" /> Bangunan_Dekat_Jamal'
            });
var format_Bangunan_Jauh_Jamal_2 = new ol.format.GeoJSON();
var features_Bangunan_Jauh_Jamal_2 = format_Bangunan_Jauh_Jamal_2.readFeatures(json_Bangunan_Jauh_Jamal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Bangunan_Jauh_Jamal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Jauh_Jamal_2.addFeatures(features_Bangunan_Jauh_Jamal_2);
var lyr_Bangunan_Jauh_Jamal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Jauh_Jamal_2, 
                style: style_Bangunan_Jauh_Jamal_2,
                popuplayertitle: 'Bangunan_Jauh_Jamal',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Jauh_Jamal_2.png" /> Bangunan_Jauh_Jamal'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_Bangunan_Dekat_Jamal_1.setVisible(true);lyr_Bangunan_Jauh_Jamal_2.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_Bangunan_Dekat_Jamal_1,lyr_Bangunan_Jauh_Jamal_2];
lyr_Bangunan_Dekat_Jamal_1.set('fieldAliases', {'osm_id': 'osm_id', 'Tinggi': 'Tinggi', 'Dusun': 'Dusun', 'Akses': 'Akses', 'X': 'X', 'Y': 'Y', 'Luas': 'Luas', });
lyr_Bangunan_Jauh_Jamal_2.set('fieldAliases', {'osm_id': 'osm_id', 'Tinggi': 'Tinggi', 'Dusun': 'Dusun', 'Akses': 'Akses', 'X': 'X', 'Y': 'Y', 'Luas': 'Luas', });
lyr_Bangunan_Dekat_Jamal_1.set('fieldImages', {'osm_id': 'TextEdit', 'Tinggi': 'TextEdit', 'Dusun': 'TextEdit', 'Akses': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Luas': 'Range', });
lyr_Bangunan_Jauh_Jamal_2.set('fieldImages', {'osm_id': 'TextEdit', 'Tinggi': 'TextEdit', 'Dusun': 'TextEdit', 'Akses': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Bangunan_Dekat_Jamal_1.set('fieldLabels', {'osm_id': 'hidden field', 'Tinggi': 'inline label - always visible', 'Dusun': 'inline label - always visible', 'Akses': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Bangunan_Jauh_Jamal_2.set('fieldLabels', {'osm_id': 'hidden field', 'Tinggi': 'inline label - always visible', 'Dusun': 'inline label - always visible', 'Akses': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Bangunan_Jauh_Jamal_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});