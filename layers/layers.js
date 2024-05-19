var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Vitesseduventms_1 = new ol.format.GeoJSON();
var features_Vitesseduventms_1 = format_Vitesseduventms_1.readFeatures(json_Vitesseduventms_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vitesseduventms_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vitesseduventms_1.addFeatures(features_Vitesseduventms_1);
var lyr_Vitesseduventms_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vitesseduventms_1, 
                style: style_Vitesseduventms_1,
                popuplayertitle: "Vitesse du vent (m/s)",
                interactive: false,
    title: 'Vitesse du vent (m/s)<br />\
    <img src="styles/legend/Vitesseduventms_1_0.png" /> 0,6 - 2,1<br />\
    <img src="styles/legend/Vitesseduventms_1_1.png" /> 2,1 - 3,7<br />\
    <img src="styles/legend/Vitesseduventms_1_2.png" /> 3,7 - 5,3<br />\
    <img src="styles/legend/Vitesseduventms_1_3.png" /> 5,3 - 6,8<br />\
    <img src="styles/legend/Vitesseduventms_1_4.png" /> 6,8 - 8,4<br />'
        });
var format_Whisper200EJkWhm_2 = new ol.format.GeoJSON();
var features_Whisper200EJkWhm_2 = format_Whisper200EJkWhm_2.readFeatures(json_Whisper200EJkWhm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Whisper200EJkWhm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Whisper200EJkWhm_2.addFeatures(features_Whisper200EJkWhm_2);
var lyr_Whisper200EJkWhm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Whisper200EJkWhm_2, 
                style: style_Whisper200EJkWhm_2,
                popuplayertitle: "Whisper 200 EJ (kWh/m²)",
                interactive: true,
    title: 'Whisper 200 EJ (kWh/m²)<br />\
    <img src="styles/legend/Whisper200EJkWhm_2_0.png" /> 0 - 0,46<br />\
    <img src="styles/legend/Whisper200EJkWhm_2_1.png" /> 0,46 - 0,92<br />\
    <img src="styles/legend/Whisper200EJkWhm_2_2.png" /> 0,92 - 1,38<br />\
    <img src="styles/legend/Whisper200EJkWhm_2_3.png" /> 1,38 - 1,84<br />\
    <img src="styles/legend/Whisper200EJkWhm_2_4.png" /> 1,84 - 2,3<br />'
        });
var format_Whisper200EAkWhm_3 = new ol.format.GeoJSON();
var features_Whisper200EAkWhm_3 = format_Whisper200EAkWhm_3.readFeatures(json_Whisper200EAkWhm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Whisper200EAkWhm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Whisper200EAkWhm_3.addFeatures(features_Whisper200EAkWhm_3);
var lyr_Whisper200EAkWhm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Whisper200EAkWhm_3, 
                style: style_Whisper200EAkWhm_3,
                popuplayertitle: "Whisper 200 EA (kWh/m²)",
                interactive: false,
    title: 'Whisper 200 EA (kWh/m²)<br />\
    <img src="styles/legend/Whisper200EAkWhm_3_0.png" /> 0 - 168<br />\
    <img src="styles/legend/Whisper200EAkWhm_3_1.png" /> 168 - 336<br />\
    <img src="styles/legend/Whisper200EAkWhm_3_2.png" /> 336 - 504<br />\
    <img src="styles/legend/Whisper200EAkWhm_3_3.png" /> 504 - 672<br />\
    <img src="styles/legend/Whisper200EAkWhm_3_4.png" /> 672 - 840<br />'
        });
var format_Algrie_4 = new ol.format.GeoJSON();
var features_Algrie_4 = format_Algrie_4.readFeatures(json_Algrie_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algrie_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Algrie_4.addFeatures(features_Algrie_4);
var lyr_Algrie_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Algrie_4, 
                style: style_Algrie_4,
                popuplayertitle: "Algérie",
                interactive: false,
                title: '<img src="styles/legend/Algrie_4.png" /> Algérie'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Vitesseduventms_1.setVisible(true);lyr_Whisper200EJkWhm_2.setVisible(true);lyr_Whisper200EAkWhm_3.setVisible(true);lyr_Algrie_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Vitesseduventms_1,lyr_Whisper200EJkWhm_2,lyr_Whisper200EAkWhm_3,lyr_Algrie_4];
lyr_Vitesseduventms_1.set('fieldAliases', {'fid': 'fid', 'index': 'index', 'v': 'v', 'label': 'label', });
lyr_Whisper200EJkWhm_2.set('fieldAliases', {'fid': 'fid', 'index': 'index', 'Ej_min': 'Ej_min', 'Ej_max': 'Ej_max', 'label': 'label', });
lyr_Whisper200EAkWhm_3.set('fieldAliases', {'fid': 'fid', 'index': 'index', 'E_min': 'E_min', 'E_max': 'E_max', 'label': 'label', });
lyr_Algrie_4.set('fieldAliases', {'name': 'name', 'name_ar': 'name_ar', 'name_ber': 'name_ber', 'density': 'density', 'city_code': 'city_code', });
lyr_Vitesseduventms_1.set('fieldImages', {'fid': 'TextEdit', 'index': 'Range', 'v': 'TextEdit', 'label': 'TextEdit', });
lyr_Whisper200EJkWhm_2.set('fieldImages', {'fid': 'TextEdit', 'index': 'Range', 'Ej_min': 'TextEdit', 'Ej_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Whisper200EAkWhm_3.set('fieldImages', {'fid': 'TextEdit', 'index': 'Range', 'E_min': 'TextEdit', 'E_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Algrie_4.set('fieldImages', {'name': 'TextEdit', 'name_ar': 'TextEdit', 'name_ber': 'TextEdit', 'density': 'KeyValue', 'city_code': 'KeyValue', });
lyr_Vitesseduventms_1.set('fieldLabels', {'fid': 'no label', 'index': 'no label', 'v': 'no label', 'label': 'no label', });
lyr_Whisper200EJkWhm_2.set('fieldLabels', {'fid': 'no label', 'index': 'no label', 'Ej_min': 'no label', 'Ej_max': 'no label', 'label': 'no label', });
lyr_Whisper200EAkWhm_3.set('fieldLabels', {'fid': 'no label', 'index': 'no label', 'E_min': 'no label', 'E_max': 'no label', 'label': 'no label', });
lyr_Algrie_4.set('fieldLabels', {'name': 'inline label - always visible', 'name_ar': 'no label', 'name_ber': 'no label', 'density': 'no label', 'city_code': 'no label', });
lyr_Algrie_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});