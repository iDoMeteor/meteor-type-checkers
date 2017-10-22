// TODO:
// Check for new types, DataView, ArrayBuffer, and any forgotten

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isArray = function(value) {
  if (
    ('object' == typeof (value))
      && (Array.isArray(value))
  ) {
    return true;
  }
  return false;
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isBlob = function (value) {
  if ('undefined' == typeof(Blob)) return false;
  return (value instanceof Blob);
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isBoolean = function(value) {

  if ('boolean' == typeof (value)) {
    return true;
  }

  if ('string' == typeof (value)) {

    if (
      ('1' == value)
        || ('0' === value)
          || ('-1' == value)
    ) {
      return true;
    }

    return (
      ('false' == value)
        || ('true' == value)
    ) ? true : false;

  } else if ('number' == typeof (value)) {

    if (
      (1 == value)
        || (0 === value)
          || (-1 == value)
    ) {
      return true;
    } else {
      return false;
    }

  }

  return false;

};

/***************************************************************************
 *
 * @Summary         Checks if parameter is a string matching a Mongo ID
 * @Method          isCollectionId
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isCollectionId = function(value) {
  return (
    (/^[a-fA-F0-9]{24}$/.test(value))
      || (/^\w{17}$/.test(value))
  )
    ? true
    : false;
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type date
 * @Method          isDate
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isDate = function(value) {
  return (iDM.isNaN(Date.parse(value)))
    ? false
    : true;
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isFileObject = function (value) {
  if ('undefined' == typeof(File)) return false;
  return (value instanceof File);
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isFloat = function(value) {

  return (
    ('number' == typeof(value))
      || (/^-?\d*$/.test(value))
  ) ? true : false;

};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Function
 * @Method          isFunction
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 *
 * ************************************************************************/
iDM.isFunction = function(value) {
  return ('function' == typeof (value))
    ? true
    : false;
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is a valid email, intranet friendly
 * @Method          isValidEmailAdress
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isHTTPObject = function (value) {

  return (
    (value)
    && ('object' == typeof(value))
    && (value.statusCode)
    && ('number' == typeof(value.statusCode))
  ) ? true : false;

};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isInteger = function(value) {

  if ('undefined' == typeof(value)) return false;
  if (null === value) return false;
  return (/^-?\d*$/.test(value.toString())) ? true : false;

};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isNaN = function(value) {
  return (value !== value);
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isNull = function(value) {
  return (null === value);
};

/***************************************************************************
 *
 * @Summary         Checks if param is a string of digits, possibly negative
 * @Method          isNumber
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isNumber = function(value) {
  if (iDM.isNaN(value)) return false;
  return (
    ('number' == typeof (value))
      || (/^-?[0-9]+\.?[0-9]*$/.test(value))
  ) ? true : false;
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Object
 * @Method          isObject
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isObject = function(value) {
  if (!value) return false;
  return ('object' == typeof (value))
    ? true
    : false;
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isString = function(value, min, max) {

  if ('string' == typeof (value)) {
    value = value.trim();
    // Check vs min & max length
    if (this.isInteger(min) && this.isInteger(max)) {
      if (
        (min <= value.length)
          && (max >= value.length)
      ) {
        return true;
      } else {
        return false;
      }
    }
    // Check vs min length
    if (this.isInteger(min)) {
      if (min <= value.length) {
        return true;
      } else {
        return false;
      }
    }
    // Check vs max length
    if (this.isInteger(max)) {
      if (max >= value.length) {
        return true;
      } else {
        return false;
      }
    }
    // No length constraints, still string
    if (!min && !max) {
      return true;
    }
  }

  // Not a string
  return false;

};

/***************************************************************************
 *
 * @Summary         Checks if Blaze thinks the parameter is a template
 * @Method          isTemplate
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isTemplate = function(value) {
  if ('undefined' == typeof(Blaze)) return false;
  return (Blaze.isTemplate(value));
};

/***************************************************************************
 *
 * @Summary         Checks if the parameter is a template instance
 * @Method          isTemplateInstance
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isTemplateInstance = function(value) {
  if ('undefined' == typeof(Blaze)) return false;
  return (value instanceof Blaze.TemplateInstance);
};

/***************************************************************************
 *
 * @Summary         Checks if parameter is of type Boolean
 * @Method          isBoolean
 * @Param           n/a
 * @Returns         undefined
 * @Location        Client, Server
 *
 * ************************************************************************/
iDM.isUndefined = function(value) {
  return (undefined === value);
};
