console.log "Hello world!"
console.log "It works!"


animate = (formId) ->

  getElements = (elClass) ->
    document.getElementById(formId)
            .getElementsByClassName(elClass)

  inputs = getElements("input")
  icons = getElements("icon")
  btn = getElements("btn-animate")[0]

  elAnimate = (el) ->
    el.classList.toggle("animate")
  elCheck = (el) ->
    el.classList.contains("is-checked")

  animationRun = ->
    elAnimate(input) for input in inputs when elCheck(input)
    elAnimate(icon) for icon in icons when elCheck(icon)
    btn.classList.toggle("is-on")

  btn.addEventListener "click", animationRun

animate("form-animate-1")
animate("form-animate-2")
animate("form-animate-3")
