let defaultButtonValues = {
  height: 60,
  alignSelf: 'center',
  justifyContent: 'center'
}

let defaultComponentValues = {
  alignSelf: 'center',
  justifyContent: 'center',
}

let defaultTextValues = {
  color: '#FFF',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
}

let defaultHorizontalComponentValues = {
  alignItems: 'center',  
  flexDirection: 'row',
  justifyContent: 'space-around',
}

let defaultBorderButtonSmall = {
  height: 25
}

let defaultBorderButtonRounded = {
  borderWidth: 1,
  borderRadius: 60,
}

let defaultBorderButtonRoundedSmall = {
  borderWidth: 1,
  borderRadius: 60,
  height: 25
}

let appearance = {
  'horizontal-no-image':{
    button:{
      ...defaultButtonValues
    },
    component:{
      ...defaultComponentValues,
      ...defaultHorizontalComponentValues,
      justifyContent: 'center',
    },
    text:{
      ...defaultTextValues
    }
  },
  'horizontal':{
    button:{
      ...defaultButtonValues
    },
    component:{
      ...defaultComponentValues,
      ...defaultHorizontalComponentValues
    },
    text:{
      ...defaultTextValues
    }
  },
  'vertical':{
    button:{
      ...defaultButtonValues
    },
    component:{
      ...defaultComponentValues
    },
    text:{
      ...defaultTextValues
    }
  },
  'rounded':{
    button:{
      ...defaultButtonValues,
      borderRadius: 60,
    },
    component:{
      ...defaultComponentValues,
    },
    text:{
      ...defaultTextValues
    }
  },
  'login':{
    button:{
      ...defaultButtonValues
    },
    component:{
      ...defaultComponentValues,
    },
    text:{
      ...defaultTextValues
    }
  },
  'border':{
    button: {
      ...defaultButtonValues,
      borderWidth: 1,
    },
    component:{
      ...defaultComponentValues,
    },
    text:{
      ...defaultTextValues
    }
  },
  'border-small':{
    button: {
      ...defaultButtonValues,
      ...defaultBorderButtonSmall,
      borderWidth: 1,
    },
    component:{
      ...defaultComponentValues,
    },
    text:{
      ...defaultTextValues
    }
  },
  'border-rounded':{
    button: {
      ...defaultButtonValues,
      ...defaultBorderButtonRounded,
    },
    component:{
      ...defaultComponentValues,
    },
    text:{
      ...defaultTextValues
    }
  },
  'border-rounded-small':{
    button: {
      ...defaultButtonValues,
      ...defaultBorderButtonRoundedSmall,
    },
    component:{
      ...defaultComponentValues,
    },
    text:{
      ...defaultTextValues
    }
  },
  'border-light':{
    button: {
      ...defaultButtonValues,
      borderWidth: 1,
    },
    component:{
      ...defaultComponentValues
    },
    text:{
      ...defaultTextValues,
      color: '#000',
    }
  },
  'border-rounded-light':{
    button: {
      ...defaultButtonValues,
      ...defaultBorderButtonRounded,
    },
    component:{
      ...defaultComponentValues,
    },
    text:{
      ...defaultTextValues,
      color: '#000',
    }
  },
  'border-rounded-light-small':{
    button: {
      ...defaultButtonValues,
      ...defaultBorderButtonRoundedSmall,
    },
    component:{
      ...defaultComponentValues,
    },
    text:{
      ...defaultTextValues,
      color: '#000',
    }
  },
  'menu':{
    button:{
      height: 40
    },
    component:{
      ...defaultHorizontalComponentValues,
      justifyContent: 'flex-start'
    },
    text:{
      ...defaultTextValues,
      left: 0,
      color: '#000'
    }
  },
  'link':{
    button:{
      ...defaultButtonValues
    },
    component:{
      ...defaultComponentValues
    },
    text:{
      ...defaultTextValues,
      color: '#3c98c9',
      fontWeight: 'normal'
    }
  }
}

export default appearance