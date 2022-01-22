class View{
  constructor (){
    this.current = {}
    this.energy = $('.energy')
    this.qty = $('.qty')
  }
  renderQuetions (){
    this.current.quetions.map(item=>{
          let tpl  = ''
          if(item.status){
                tpl  = `<div class="btn quetion" data-q="true">${item.quetion}</div>`
          }
          else{
                tpl  = `<div class="btn quetion" data-q="false">${item.quetion}</div>`
          }
            

          $('.buttons-list').append(tpl)
    })
  }
  renderItems (){
    this.current.items.map(item=>{
            let tpl = `<div class="btn quetion">${item.name}</div>`
            $('.items-list').append(tpl)
    })
  }
  render(current){
      this.reset()
      this.current = current
      this.renderQuetions()
      this.renderItems()
      $('.item-description').html(this.current.item.description)
      $('.answer-debug').html(this.current.item.name)
  }
  reset(){
      $('.buttons-list').empty()
      $('.items-list').empty()
  }
}