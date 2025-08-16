let _msgFrmIsEmailCheck = null;

function mgsOnlyNumber(allClass) {
    document.querySelectorAll(allClass).forEach(el => {
        el.addEventListener('keypress', event => {
            if (event.key !== 'Backspace' && isNaN(event.key)) {
                event.preventDefault();
            }
        });
    });
}

function mgsNumberDot(allClass) {
    document.querySelectorAll(allClass).forEach(el => {
        el.addEventListener('keypress', event => {
            if ((event.key === '.' && el.value.includes('.')) || (event.key < '0' || event.key > '9') && event.key !== '.') {
                event.preventDefault();
            }
        });
    });
}

function mgsCutCopyPaste(allClass) {
    document.querySelectorAll(allClass).forEach(el => {
        ['cut', 'copy', 'paste'].forEach(evt => {
            el.addEventListener(evt, e => e.preventDefault());
        });
    });
}

function mgsa2zSpace(allClass) {
    document.querySelectorAll(allClass).forEach(el => {
        el.addEventListener('keypress', event => {
            if ((event.key < 'a' || event.key > 'z') && event.key !== ' ') {
                event.preventDefault();
            }
        });
    });
}

function mgsa2z(allClass) {
    document.querySelectorAll(allClass).forEach(el => {
        el.addEventListener('keypress', event => {
            if (event.key < 'a' || event.key > 'z') {
                event.preventDefault();
            }
        });
    });
}

function mgsA2Zspace(allClass) {
    document.querySelectorAll(allClass).forEach(el => {
        el.addEventListener('keypress', event => {
            if ((event.key < 'A' || event.key > 'Z') && event.key !== ' ') {
                event.preventDefault();
            }
        });
    });
}

function mgsA2Z(allClass) {
    document.querySelectorAll(allClass).forEach(el => {
        el.addEventListener('keypress', event => {
            if (event.key < 'A' || event.key > 'Z') {
                event.preventDefault();
            }
        });
    });
}

function mgsa2Zspace(allClass) {
    document.querySelectorAll(allClass).forEach(el => {
        el.addEventListener('keypress', event => {
            if (!(/[a-zA-Z ]/.test(event.key))) {
                event.preventDefault();
            }
        });
    });
}

function mgsa2Z(allClass) {
    document.querySelectorAll(allClass).forEach(el => {
        el.addEventListener('keypress', event => {
            if (!(/[a-zA-Z]/.test(event.key))) {
                event.preventDefault();
            }
        });
    });
}

function mgsIsValidEmail(email) {
    const pattern = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
    return pattern.test(email.trim());
}

function validateField(el, isName=false) {
    const fieldName = (isName)?el:el.name;
    const errorClass1 = `_mgs_${fieldName}_error`;
    const errorClass2 = `${fieldName}_error`;
    el = (isName)?document.querySelector('.'+el):el;

    document.querySelectorAll(`.${errorClass1}`).forEach(e => e.remove());
    document.querySelectorAll(`.${errorClass2}`).forEach(e => e.remove());

    el.classList.remove('is-invalid', 'is-valid');
    const emailVal = (el.value || "").trim();
    if (!emailVal) {
        el.classList.add('is-invalid');
        el.insertAdjacentHTML( 'afterend', `<div style="font-size:0.875em; color:red;" class="${errorClass1}" id="${errorClass1}">This field is required</div>` );
        return false;
    } else {
        if (!mgsIsValidEmail(emailVal)) {
            el.classList.add('is-invalid');
            el.insertAdjacentHTML( 'afterend', `<div style="font-size:0.875em; color:red;" class="${errorClass1}" id="${errorClass1}">Please enter a valid email address</div>` );
            return false;
        }else{
            el.classList.add('is-valid');
        }
        return true;
    }
}

function mgsValidateEmail(allClass) {
    _msgFrmIsEmailCheck = allClass;
    const _mgsFrmQuery = document.querySelectorAll(allClass);

    _mgsFrmQuery.forEach(el => {
        el.addEventListener('keyup', () => validateField(el));
        el.addEventListener('change', () => validateField(el));
    });

    // Return a function so you can run the check manually
    return function() {
        let allValid = true;
        _mgsFrmQuery.forEach(el => {
            if (!validateField(el)) {
                allValid = false;
            }
        });
        return allValid;
    };
}

function mgsCheckRequired(_mgsFrmAllClass) {
    const _mgsFrmFields = document.querySelectorAll(_mgsFrmAllClass);

    _mgsFrmFields.forEach(_mgsFrmField => {
        const handleKeyup = () => {
            const _mgsFrmFldName = _mgsFrmField.name;
            const mgsFrmIdName = _mgsFrmField.id;
            const _mgsFrmFieldName = (_mgsFrmFldName !== '') ? _mgsFrmFldName : mgsFrmIdName;
            const _mgsFrmFieldName1 = '_mgs_'+_mgsFrmFieldName+'_error';
            // Remove old error messages
            document.querySelectorAll(`.${_mgsFrmFieldName}_error`).forEach(el => el.remove());
            document.querySelectorAll(`._${_mgsFrmFieldName1}`).forEach(el => el.remove());

            _mgsFrmField.classList.remove('is-invalid', 'is-valid');
            const value = (_mgsFrmField.value || "").trim();
            if (!value) {
                _mgsFrmField.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${_mgsFrmFieldName}_error" id="${_mgsFrmFieldName}_error">This field is required</div>`);
                _mgsFrmField.classList.add('is-invalid');
            } else {
                _mgsFrmField.classList.add('is-valid');
            }
        };

        const handleChange = () => {
            const _mgsFrmFldName = _mgsFrmField.name;
            const mgsFrmIdName = _mgsFrmField.id;
            const _mgsFrmFieldName = (_mgsFrmFldName !== '') ? _mgsFrmFldName : mgsFrmIdName;
            const _mgsFrmFieldName1 = '_mgs_'+_mgsFrmFieldName+'_error';

            // Remove old error messages
            document.querySelectorAll(`.${_mgsFrmFieldName}_error`).forEach(el => el.remove());
            document.querySelectorAll(`.${_mgsFrmFieldName1}`).forEach(el => el.remove());

            _mgsFrmField.classList.remove('is-invalid', 'is-valid');
            const value = (_mgsFrmField.value || "").trim();
            if (!value) {
                const nextEl = _mgsFrmField.nextElementSibling;
                if (nextEl && nextEl.classList.contains('chosen-container')) {
                    nextEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${errorId}" id="${errorId}">This field is required</div>`);
                    nextEl.classList.add('is-invalid');
                } else if (nextEl && nextEl.classList.contains('select2-container')) {
                    nextEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${errorId}" id="${errorId}">This field is required</div>`);
                    nextEl.classList.add('is-invalid');
                } else {
                    _mgsFrmField.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${_mgsFrmFieldName}_error" id="${_mgsFrmFieldName}_error">This field is required</div>`);
                }
                _mgsFrmField.classList.add('is-invalid');

            } else {
                const nextEl = _mgsFrmField.nextElementSibling;
                if (nextEl && nextEl.classList.contains('chosen-container')) {
                    nextEl.classList.add('is-valid');
                } else if (nextEl && nextEl.classList.contains('select2-container')) {
                    nextEl.classList.add('is-valid');
                } else {
                    _mgsFrmField.classList.add('is-valid');
                }
            }
        };

        _mgsFrmField.addEventListener('keyup', handleKeyup);
        _mgsFrmField.addEventListener('change', handleChange);
    });
}

function mgsFormValidate(byNames = null, sameClass = null, byClassId = null) {
    let _mgsFrmbyNames = byNames?.split(',') ?? [];
    let _mgsFrmsameClass = sameClass?.split(',') ?? [];
    let _mgsFrmbyClassId = byClassId?.split(',') ?? [];

    let _mgsFrmcheck = true;
    let _mgsCheckMail = _msgFrmIsEmailCheck?.split(',')?.map(dd => dd?.substring(1));
    
    // Helper: remove element if exists
    const removeElement = (selector) => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    };

    // Helper: add error after a field
    const addError = (field, errorId) => {
        const errorHtml = `<div style="font-size:0.875em; color:red;" class="${errorId}" id="${errorId}">This field is required</div>`;
        field.insertAdjacentHTML('afterend', errorHtml);
        field.classList.add('is-invalid');
    };

    //helper: check this field is check email

    const checkIsEmailCheck = (field) => {
        return _mgsCheckMail?.includes(field);
    }

    // _mgsFrmbyNames validation
    if (_mgsFrmbyNames.length !== 0) {
        _mgsFrmbyNames.forEach(selector => {
            const fieldName = selector.substring(1);
            const errorId = fieldName + "_error";
            removeElement("#" + errorId);
            removeElement("#_mgs_" + errorId);

            const _mgsFrmFieldName = fieldName;
            const _mgsFrminputs = document.querySelectorAll(`input[name="${_mgsFrmFieldName}"], textarea[name="${_mgsFrmFieldName}"], checkbox[name="${_mgsFrmFieldName}"], select[name="${_mgsFrmFieldName}"]`);

            let isEmpty = false;
            _mgsFrminputs.forEach(field => {
                const value = (field.value || "").trim();
                field.classList.remove('is-invalid', 'is-valid');
                if (!value) {
                    // For chosen/select2 handling
                    const nextEl = field.nextElementSibling;
                    if (nextEl && nextEl.classList.contains('chosen-container')) {
                        nextEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${errorId}" id="${errorId}">This field is required</div>`);
                        nextEl.classList.add('is-invalid');
                    } else if (nextEl && nextEl.classList.contains('select2-container')) {
                        nextEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${errorId}" id="${errorId}">This field is required</div>`);
                        nextEl.classList.add('is-invalid');
                    } else {
                        addError(field, errorId);
                    }
                    isEmpty = true;
                } else {
                    if(checkIsEmailCheck(fieldName)){
                        if (!validateField(fieldName, true)) isEmpty = true;
                    }else{
                        field.classList.add('is-valid');
                    }
                }
            });
            if (isEmpty) _mgsFrmcheck = false;
        });
    }

    // _mgsFrmsameClass validation
    if (_mgsFrmsameClass.length !== 0) {
        _mgsFrmsameClass.forEach(classSelector => {
            const fields = document.querySelectorAll(classSelector);
            fields.forEach((field, key) => {
                const fieldName = selector.substring(1);
                const errorId = fieldName + key + "_error";
                removeElement("#" + errorId);
                removeElement("#_mgs_" + errorId);

                const value = (field.value || "").trim();
                if (!value) {
                    const nextEl = field.nextElementSibling;
                    if (nextEl && nextEl.classList.contains('chosen-container')) {
                        nextEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${errorId}" id="${errorId}">This field is required</div>`);
                    } else if (nextEl && nextEl.classList.contains('select2-container')) {
                        nextEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${errorId}" id="${errorId}">This field is required</div>`);
                    } else {
                        addError(field, errorId);
                    }
                    _mgsFrmcheck = false;
                }
            });
        });
    }

    // _mgsFrmbyClassId validation
    if (_mgsFrmbyClassId.length !== 0) {
        _mgsFrmbyClassId.forEach(selector => {
            const fields = document.querySelectorAll(selector);
            fields.forEach(field => {
                const fieldName = selector.substring(1);
                const errorId = fieldName + "_error";
                removeElement("#" + errorId);
                removeElement("#_mgs_" + errorId);

                const value = (field.value || "").trim();
                if (!value) {
                    const nextEl = field.nextElementSibling;
                    if (nextEl && nextEl.classList.contains('chosen-container')) {
                        nextEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${errorId}" id="${errorId}">This field is required</div>`);
                    } else if (nextEl && nextEl.classList.contains('select2-container')) {
                        nextEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${errorId}" id="${errorId}">This field is required</div>`);
                    } else {
                        addError(field, errorId);
                    }
                    _mgsFrmcheck = false;
                }else{
                    if(checkIsEmailCheck(fieldName)){
                        if (!validateField(fieldName, true)) _mgsFrmcheck = false;
                    }else{
                        field.classList.add('is-valid');
                    }
                }
            });
        });
    }

    return _mgsFrmcheck;
}

function mgsShowMessage(message, type = 'success', time=4000) {
    let mgsMessageBox = document.getElementById('_mgsMessage');
    if (!mgsMessageBox) {
        mgsMessageBox = document.createElement('div');
        mgsMessageBox.id = '_mgsMessage';
        mgsMessageBox.style.position = 'fixed';
        mgsMessageBox.style.top = '20px';
        mgsMessageBox.style.right = '20px';
        mgsMessageBox.style.zIndex = '99999';
        mgsMessageBox.style.padding = '15px 20px';
        mgsMessageBox.style.borderRadius = '5px';
        mgsMessageBox.style.minWidth = '200px';
        mgsMessageBox.style.mgsMessageBoxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        mgsMessageBox.style.fontFamily = 'Arial, sans-serif';
        document.body.appendChild(mgsMessageBox);
    }

    mgsMessageBox.style.display = 'block';
    mgsMessageBox.innerText = message;
    mgsMessageBox.style.background = type === 'success' ? '#03741dff' : '#b30b1bff';
    mgsMessageBox.style.color = '#ffff';
    mgsMessageBox.style.border = type === 'success' ? '1px solid #03741dff' : '1px solid #b30b1bff';
    setTimeout(() => {
        mgsMessageBox.style.display = 'none';
    }, time);
}

function msgSubmitData(data) {
    let {url, returnUrl, formId, formData, methodType, bearerToken} =  data;
    let _mgsReturnUrl = true;
    methodType = (methodType)?methodType:'post';
    if(!url){
        mgsShowMessage('URL is required', 'error');
        return;
    }
    if(!returnUrl){
        _mgsReturnUrl = false;
        returnUrl = url;
    }
    
    if(!formId){
        mgsShowMessage('Form ID is required', 'error');
        return;
    }

    // Prepare headers and body
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (bearerToken) headers.append("Authorization", `Bearer ${bearerToken}`);

    const form = document.querySelector(formId);
    const submitButton = form.querySelector('[type="submit"]');

    // Disable submit button
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.dataset.originalText = submitButton.innerHTML;
        submitButton.innerHTML = 'Submitting...';
    }

    // Create loader dynamically
    const loader = document.createElement('div');
    loader.id = '_mgsLoader';
    loader.style.position = 'fixed';
    loader.style.top = 0;
    loader.style.left = 0;
    loader.style.right = 0;
    loader.style.bottom = 0;
    loader.style.background = 'rgba(255,255,255,0.6)';
    loader.style.zIndex = '9999';
    loader.style.display = 'flex';
    loader.style.alignItems = 'center';
    loader.style.justifyContent = 'center';
    loader.innerHTML = `<div class="spinner-border text-primary" role="status">
        <span class="visually-hidden"></span>
    </div>`;
    document.body.appendChild(loader);

    fetch(url, {
        method: methodType,
        body: formData
    })
    .then(response => response.text())
    .then(res => {
        let result;
        try {
            result = JSON.parse(res);
        } catch (e) {
            mgsShowMessage('Invalid JSON: ' ?? 'Internal server error', 'error');
            console.error("Invalid JSON:", res);
            return;
        }

        // Clear previous error messages
        document.querySelectorAll('.error_field').forEach(el => el.textContent = '');

        if (result.status) {
            mgsShowMessage(result?.message ?? 'Data saved successfully', 'success');
            const _mgsFrmformEl = document.querySelector(formId);
            if (_mgsFrmformEl) {
                _mgsFrmformEl.reset();

                const elements = _mgsFrmformEl.querySelectorAll('input, select, textarea');
                elements.forEach(el => {
                    el.classList.remove('is-valid', 'is-invalid');
                    if (el.type === 'checkbox' || el.type === 'radio') {
                        el.checked = false;
                    }
                });

                // Reset Chosen selects
                const chosenElements = _mgsFrmformEl.querySelectorAll('select.chosen-select');
                chosenElements.forEach(select => {
                    $(select).val('').trigger('chosen:updated');
                });

                // Reset Select2 selects
                const select2Elements = _mgsFrmformEl.querySelectorAll('select.select2');
                select2Elements.forEach(select => {
                    $(select).val(null).trigger('change'); // null for placeholder reset
                });
            }
            if(_mgsReturnUrl){
                setTimeout(() => {
                    window.location.href = returnUrl;
                }, 1000);
            }
        } else {
            mgsShowMessage(result?.message ?? 'Something went wrong', 'error');
            if (result.error) {
                for (let index in result.error) {
                    const err = result.error[index];

                    // Remove old error
                    document.querySelectorAll('.' + index + '_error').forEach(el => el.remove());

                    // Input fields
                    const inputEl = document.querySelector(`input[name="${index}"]`);
                    if (inputEl) {
                        inputEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${index}_error" id="${index}_error">${err}</div>`);
                    }

                    // Textarea fields
                    const textareaEl = document.querySelector(`textarea[name="${index}"]`);
                    if (textareaEl) {
                        textareaEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${index}_error" id="${index}_error">${err}</div>`);
                    }

                    // Checkbox fields
                    const checkboxEl = document.querySelector(`input[type="checkbox"][name="${index}"]`);
                    if (checkboxEl) {
                        checkboxEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${index}_error" id="${index}_error">${err}</div>`);
                    }

                    // Select fields
                    const selectEl = document.querySelector(`select[name="${index}"]`);
                    if (selectEl) {
                        if (selectEl.nextElementSibling && selectEl.nextElementSibling.classList.contains('chosen-container')) {
                            selectEl.nextElementSibling.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${index}_error" id="${index}_error">${err}</div>`);
                        } else {
                            selectEl.insertAdjacentHTML('afterend', `<div style="font-size:0.875em; color:red;" class="${index}_error" id="${index}_error">${err}</div>`);
                        }
                    }
                }
            }
        }
    })
    .catch(err => {
        mgsShowMessage(err?.message ?? 'Internal server error', 'error');
    })
    .finally(() => {
        const loader = document.getElementById('_mgsLoader');
        if (loader) loader.remove();

        if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = submitButton.dataset.originalText || 'Submit';
        }
    });;
}

// Export globally for UMD/IIFE
window.mgsOnlyNumber = mgsOnlyNumber;
window.mgsNumberDot = mgsNumberDot;
window.mgsCutCopyPaste = mgsCutCopyPaste;
window.mgsa2zSpace = mgsa2zSpace;
window.mgsa2z = mgsa2z;
window.mgsA2Zspace = mgsA2Zspace;
window.mgsA2Z = mgsA2Z;
window.mgsa2Zspace = mgsa2Zspace;
window.mgsa2Z = mgsa2Z;
window.mgsIsValidEmail = mgsIsValidEmail;
window.mgsValidateEmail = mgsValidateEmail;
window.mgsCheckRequired = mgsCheckRequired;
window.mgsFormValidate = mgsFormValidate;
window.mgsShowMessage = mgsShowMessage;
window.msgSubmitData = msgSubmitData;

// If using modules
export { mgsOnlyNumber, mgsNumberDot, mgsCutCopyPaste, mgsa2zSpace, mgsa2z, mgsA2Zspace, mgsA2Z, mgsa2Zspace, mgsa2Z, mgsIsValidEmail, mgsValidateEmail, mgsCheckRequired, mgsFormValidate, mgsShowMessage, msgSubmitData };


