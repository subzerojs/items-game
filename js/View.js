class View{
  current = {}
  energy = $('.energy')
  qty = $('.qty')
  quetionPrice = $('.price-quetion')
  constructor (){

  }
  renderQuetions (){
    this.current.quetions.map(item=>{
          let tpl  = ''
          if(item.status){
                tpl  = `<div class="btn quetion qn ${(item.pressed)?'item--true': ''}" data-q="true" data-uid="${item.uid}">${item.quetion}</div>`
          }
          else{
                tpl  = `<div class="btn quetion qn ${(item.pressed)?'item--false': ''}" data-q="false" data-uid="${item.uid}">${item.quetion}</div>`
          }
          $('.buttons-list').append(tpl)
    })
  }
  renderItems (){
    this.current.items.map(item=>{
            let tpl = `<div class="btn quetion item" data-name="${item.name}">${item.name}<span class="item--hide">x</span></div>`
            $('.items-list').append(tpl)
    })
  }
  render(current){
      this.reset()
      this.current = current
      this.renderQuetions()
      this.renderItems()
      $('.item-description__content').html(this.current.item.description)
      $('.item-description__btn').css('display', 'flex')
  }
  reset(){
      $('.buttons-list').empty()
      $('.items-list').empty()
  }
}