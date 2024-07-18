var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UsodeSuelo_1 = new ol.format.GeoJSON();
var features_UsodeSuelo_1 = format_UsodeSuelo_1.readFeatures(json_UsodeSuelo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsodeSuelo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsodeSuelo_1.addFeatures(features_UsodeSuelo_1);
var lyr_UsodeSuelo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsodeSuelo_1, 
                style: style_UsodeSuelo_1,
                popuplayertitle: "Uso de Suelo",
                interactive: true,
    title: 'Uso de Suelo<br />\
    <img src="styles/legend/UsodeSuelo_1_0.png" /> Equipamientos y Servicios<br />\
    <img src="styles/legend/UsodeSuelo_1_1.png" /> Espacios Abiertos<br />\
    <img src="styles/legend/UsodeSuelo_1_2.png" /> Habitacional Mixto Intenso<br />\
    <img src="styles/legend/UsodeSuelo_1_3.png" /> Habitacional Mixto Ligero<br />\
    <img src="styles/legend/UsodeSuelo_1_4.png" /> Habitacional Multifamiliar<br />\
    <img src="styles/legend/UsodeSuelo_1_5.png" /> Habitacional Unifamiliar<br />\
    <img src="styles/legend/UsodeSuelo_1_6.png" /> Subcentro Urbano<br />\
    <img src="styles/legend/UsodeSuelo_1_7.png" /> Zona de Transicion<br />\
    <img src="styles/legend/UsodeSuelo_1_8.png" /> <br />'
        });
var group_Background = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "Background"});

lyr_GoogleSatellite_0.setVisible(true);lyr_UsodeSuelo_1.setVisible(true);
var layersList = [group_Background,lyr_UsodeSuelo_1];
lyr_UsodeSuelo_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'delegacion': 'delegacion', 'distrito_n': 'distrito_n', 'calle': 'calle', 'colonia': 'colonia', 'tipo': 'tipo', 'tipo_tenen': 'tipo_tenen', 'fecha_digi': 'fecha_digi', 'fecha_actu': 'fecha_actu', 'etapa': 'etapa', 'area_munic': 'area_munic', 'aprobacion': 'aprobacion', 'clave_zoni': 'clave_zoni', 'descripcio': 'descripcio', 'area_km': 'area_km', 'area_ha': 'area_ha', 'delegacio0': 'delegacio0', 'distrito_i': 'distrito_i', 'qj1sq4mxpa': 'qj1sq4mxpa', 'piosh6ubp3': 'piosh6ubp3', 'ptzze3e': 'ptzze3e', 'cpsgn7ufm7': 'cpsgn7ufm7', 'cpsgn7ufm0': 'cpsgn7ufm0', });
lyr_UsodeSuelo_1.set('fieldImages', {'fid': 'Range', 'id': 'TextEdit', 'delegacion': 'TextEdit', 'distrito_n': 'TextEdit', 'calle': 'TextEdit', 'colonia': 'TextEdit', 'tipo': 'TextEdit', 'tipo_tenen': 'TextEdit', 'fecha_digi': 'TextEdit', 'fecha_actu': 'TextEdit', 'etapa': 'TextEdit', 'area_munic': 'TextEdit', 'aprobacion': 'TextEdit', 'clave_zoni': 'TextEdit', 'descripcio': 'TextEdit', 'area_km': 'TextEdit', 'area_ha': 'TextEdit', 'delegacio0': 'TextEdit', 'distrito_i': 'TextEdit', 'qj1sq4mxpa': 'TextEdit', 'piosh6ubp3': 'TextEdit', 'ptzze3e': 'TextEdit', 'cpsgn7ufm7': 'TextEdit', 'cpsgn7ufm0': 'TextEdit', });
lyr_UsodeSuelo_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'delegacion': 'no label', 'distrito_n': 'no label', 'calle': 'no label', 'colonia': 'no label', 'tipo': 'no label', 'tipo_tenen': 'no label', 'fecha_digi': 'no label', 'fecha_actu': 'no label', 'etapa': 'no label', 'area_munic': 'no label', 'aprobacion': 'no label', 'clave_zoni': 'no label', 'descripcio': 'no label', 'area_km': 'no label', 'area_ha': 'no label', 'delegacio0': 'no label', 'distrito_i': 'no label', 'qj1sq4mxpa': 'no label', 'piosh6ubp3': 'no label', 'ptzze3e': 'no label', 'cpsgn7ufm7': 'no label', 'cpsgn7ufm0': 'no label', });
lyr_UsodeSuelo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});