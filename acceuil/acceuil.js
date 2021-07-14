import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Acceuil extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="4c7b14df-1d64-4f66-8b0d-01324725ad4a" style={styles.acceuil}>
        <ReactImage data-layer="9dbf18b2-db04-461d-8ddc-37b4236a068b" source={require('./assets/watercolorPaperTexture.png')} style={styles.acceuil_watercolorPaperTexture} />
        <View data-layer="62a8dd24-6962-4c10-b7b7-93344051b670" style={styles.acceuil_acceuiledd30bab}>
            <ScrollView data-layer="3934b442-97bb-4dbb-8914-914257bd9023" style={styles.acceuil_acceuiledd30bab_grilleDeRepetition1}>
                <View data-layer="875fe6a2-1d3c-4683-89d9-40740e8f0fc9" style={styles.acceuil_acceuiledd30bab_grilleDeRepetition1_rectangle1b34e9408}></View>
            </ScrollView>
            <ReactImage data-layer="00555f70-f12f-47d8-ba5b-51db67b83637" source={require('./assets/drapeau.png')} style={styles.acceuil_acceuiledd30bab_drapeau} />
            <Text data-layer="91b221c3-1fde-449b-9066-729b5d5da059" style={styles.acceuil_acceuiledd30bab_linstitutSuperieurDeLenseignementADistance}>L'INSTITUT SUPERIEUR
 DE L'ENSEIGNEMENT A DISTANCE</Text>
            <Text data-layer="2b4787d8-aa29-45ae-8737-2a62e74cd305" style={styles.acceuil_acceuiledd30bab_republiqueTunisienneMinistereDeLenseignementSuperieurEtDeLaRechercheScientifique}>République Tunisienne
    Ministère de l'Enseignement Supérieur et de la
 Recherche Scientifique</Text>
            <View data-layer="8decf18b-27c7-4bdf-b745-57394fa0760c" style={styles.acceuil_acceuiledd30bab_rectangle2}></View>
            <View data-layer="31422ec2-ee28-41b8-aced-2c472798a2db" style={styles.acceuil_acceuiledd30bab_rectangle3}></View>
            <ReactImage data-layer="9f4e480c-f9c8-4a8c-b3c9-da355455f629" source={require('./assets/optionDeRecherche.png')} style={styles.acceuil_acceuiledd30bab_optionDeRecherche} />
            <Text data-layer="7a72ceaf-2d53-40d5-b761-bc616a3f1fbc" style={styles.acceuil_acceuiledd30bab_recherche}>Recherche :</Text>
            <Text data-layer="ef3c4765-41e6-4100-b839-ca18097ca164" style={styles.acceuil_acceuiledd30bab_acceuil50ff8df9}>Acceuil</Text>
            <Text data-layer="2777f8cb-d66e-4150-927c-70874462dd9e" style={styles.acceuil_acceuiledd30bab_aspectAdministratif}>Aspect Administratif</Text>
            <Text data-layer="361115db-ef42-4215-9982-8dadfaf31f85" style={styles.acceuil_acceuiledd30bab_aspectScientifique}>Aspect  Scientifique</Text>
            <Text data-layer="65aa7639-4459-49f1-8397-9dd8c8c3f59e" style={styles.acceuil_acceuiledd30bab_choixUv}>Choix UV</Text>
            <Text data-layer="f9b855e0-5d31-4595-9ada-a1e77eafe53c" style={styles.acceuil_acceuiledd30bab_espaceEtudiant}>Espace Etudiant </Text>
            <ReactImage data-layer="1cf6b2f1-9885-4344-987c-f524802787ea" source={require('./assets/logo0.png')} style={styles.acceuil_acceuiledd30bab_logo0} />
        </View>
        <Svg data-layer="3d21ad58-0a08-4103-871d-ca8e548f4e04" style={styles.acceuil_photo1} preserveAspectRatio="none" viewBox="863.5926513671875 2452 693.0181884765625 664.039794921875" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-photo1" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/photo1.png')} x="0" y="0" width="693.02px" height="664.04px" /></Pattern></Defs><SvgPath d="M 863.5926513671875 2452 L 1111.7841796875 2992.54345703125 L 1033.849609375 3116.039794921875 L 1556.61083984375 3116.039794921875 L 1556.61083984375 2452 L 863.5926513671875 2452 Z" fill="url(#img-photo1)" /></Svg>
        <ReactImage data-layer="5c0a15ab-60ff-4c0f-8604-8a12be8e96dc" source={require('./assets/logo1.png')} style={styles.acceuil_logo1} />
        <Text data-layer="ea8589fb-39c6-4ea1-b2ea-8dfb44e1fc44" style={styles.acceuil_ised}>L'INSTITUT SUPERIEUR
DE L'ENSEIGNEMENT A DISTANCE</Text>
        <ReactImage data-layer="26ea1728-4042-4e64-b065-dc741467475f" source={require('./assets/image4352c444.png')} style={styles.acceuil_image4352c444} />
        <ReactImage data-layer="b7e1b6fb-8d10-4d6e-892e-e4c30ff21523" source={require('./assets/image.png')} style={styles.acceuil_image} />
        <Text data-layer="a066419c-e3e9-46a8-a586-c65ae5314480" style={styles.acceuil_paragraphe1}>La formation continue en utilisant, en particulier les moyens 
d'enseignement à distance, a pour but essentiel d'ouvrir de 
nouveaux horizons à tous les enseignants du Ministère de
l'Education et aux fonctionnaires de l'état et du secteur privé
de se mettre à niveau dans leur discipline et acquérir de 
nouvelles compétences en maîtrisant les technologies récentes
de l'information et de la communication. Ceci ne peut 
qu'améliorer la qualité de l'enseignement dans nos écoles, 
collèges et lycées et ne peut qu'augmenter la productivité 
et l'efficacité des employés ayant suivi cette formation.</Text>
        <View style={styles.acceuil_presentationGenerale}><Text data-layer="2608cea2-a30e-422d-b105-a0bc01fc7b3d" style={{"marginTop":-5.5,"color":"rgba(24, 59, 86, 1)","fontSize":60,"fontWeight":"400","fontStyle":"normal","fontFamily":"Century Gothic","textAlign":"left","lineHeight":66}}>Présentation générale</Text></View>
        <View data-layer="957a47e1-fb24-4901-b4d3-b7c56b67f90c" style={styles.acceuil_rectangle1}></View>
        <Text data-layer="a8ef6dd7-6f12-438f-a061-d4b7d4145abb" style={styles.acceuil_voirPlus}>Voir plus</Text>
    </ScrollView>
    );
  }
}

Acceuil.propTypes = {

}

Acceuil.defaultProps = {

}


const styles = StyleSheet.create({
  "acceuil": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1920,
    "height": 1574,
    "left": 0,
    "top": 0
  },
  "acceuil_watercolorPaperTexture": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 2322,
    "height": 1739,
    "left": -201,
    "top": -82
  },
  "acceuil_acceuiledd30bab": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1935,
    "height": 185,
    "left": 0,
    "top": -36
  },
  "acceuil_acceuiledd30bab_grilleDeRepetition1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1935,
    "height": 81,
    "left": 0,
    "top": 104
  },
  "acceuil_acceuiledd30bab_grilleDeRepetition1_rectangle1b34e9408": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(64, 61, 57, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1920,
    "height": 81,
    "left": 0,
    "top": 0
  },
  "acceuil_acceuiledd30bab_drapeau": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 53,
    "height": 36,
    "left": 1552,
    "top": 54
  },
  "acceuil_acceuiledd30bab_linstitutSuperieurDeLenseignementADistance": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(29, 53, 87, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Emoji",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 216,
    "height": 38,
    "left": 441,
    "top": 51
  },
  "acceuil_acceuiledd30bab_republiqueTunisienneMinistereDeLenseignementSuperieurEtDeLaRechercheScientifique": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(29, 53, 87, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Emoji",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 302,
    "height": 57,
    "left": 1230,
    "top": 44
  },
  "acceuil_acceuiledd30bab_rectangle2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(72, 90, 115, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(72, 90, 115, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(72, 90, 115, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(72, 90, 115, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 219,
    "height": 25,
    "left": 832.5,
    "top": 70
  },
  "acceuil_acceuiledd30bab_rectangle3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(72, 90, 115, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(72, 90, 115, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(72, 90, 115, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(72, 90, 115, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(72, 90, 115, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 25,
    "height": 25,
    "left": 1063,
    "top": 70
  },
  "acceuil_acceuiledd30bab_optionDeRecherche": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 19.82,
    "height": 19.82,
    "left": 1066.13,
    "top": 73.1
  },
  "acceuil_acceuiledd30bab_optionDeRecherche_trace3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 7.42,
    "height": 7.42,
    "left": 12.4,
    "top": 12.4
  },
  "acceuil_acceuiledd30bab_optionDeRecherche_trace4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 16.1,
    "height": 16.1,
    "left": 0,
    "top": 0
  },
  "acceuil_acceuiledd30bab_recherche": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(29, 53, 87, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 70,
    "height": 19,
    "left": 833,
    "top": 48
  },
  "acceuil_acceuiledd30bab_acceuil50ff8df9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(233, 233, 233, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 70,
    "height": 30,
    "left": 320,
    "top": 129
  },
  "acceuil_acceuiledd30bab_aspectAdministratif": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(233, 233, 233, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 196,
    "height": 30,
    "left": 441,
    "top": 129
  },
  "acceuil_acceuiledd30bab_aspectScientifique": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(233, 233, 233, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 190,
    "height": 30,
    "left": 685,
    "top": 129
  },
  "acceuil_acceuiledd30bab_choixUv": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(233, 233, 233, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 90,
    "height": 30,
    "left": 923,
    "top": 130
  },
  "acceuil_acceuiledd30bab_espaceEtudiant": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(233, 233, 233, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 158,
    "height": 30,
    "left": 1061,
    "top": 130
  },
  "acceuil_acceuiledd30bab_logo0": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 139,
    "height": 139,
    "left": 292,
    "top": 0
  },
  "acceuil_photo1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 693.02,
    "height": 664.04,
    "left": 934.98,
    "top": 162.2
  },
  "acceuil_logo1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 874.8,
    "height": 874.8,
    "left": 199.57,
    "top": -36
  },
  "acceuil_ised": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(64, 61, 57, 1)",
    "fontSize": 53,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 796,
    "height": 140,
    "left": 295.2,
    "top": 559.29
  },
  "acceuil_image4352c444": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 282.45,
    "height": 407.19,
    "left": 1345.55,
    "top": 1021.66
  },
  "acceuil_image": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 282.45,
    "height": 407.19,
    "left": 1034.86,
    "top": 898
  },
  "acceuil_paragraphe1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(24, 59, 86, 1)",
    "fontSize": 26,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Century Gothic",
    "textAlign": "left",
    "lineHeight": 35,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 698,
    "height": 353,
    "left": 292,
    "top": 1039.5
  },
  "acceuil_presentationGenerale": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(24, 59, 86, 1)",
    "fontSize": 60,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Century Gothic",
    "textAlign": "left",
    "lineHeight": 66,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 643,
    "height": 71,
    "left": 292,
    "top": 922.45
  },
  "acceuil_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(64, 61, 57, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 15,
    "borderTopRightRadius": 15,
    "borderBottomLeftRadius": 15,
    "borderBottomRightRadius": 15,
    "width": 121.6,
    "height": 33.22,
    "left": 868,
    "top": 1423
  },
  "acceuil_voirPlus": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 252, 242, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Century Gothic",
    "textAlign": "left",
    "lineHeight": 29,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 60,
    "height": 32,
    "left": 899.9,
    "top": 1424.15
  }
});